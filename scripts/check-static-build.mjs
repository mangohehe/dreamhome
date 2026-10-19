import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';

const root = resolve('build');
const entries = await readdir(root);
const html = await readFile(resolve(root, 'index.html'), 'utf8');
for (const [, target] of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) {
  assert((await stat(resolve(root, '.' + target))).isFile(), `Missing deployed asset: ${target}`);
}
assert(!entries.some(name => name.endsWith('.map')), 'Production output must not contain source maps');
const scripts = entries.filter(name => extname(name) === '.js');
assert(scripts.length > 0, 'No application bundle was produced');
for (const name of entries) {
  const file = resolve(root, name), info = await stat(file);
  assert(info.isFile(), `Unexpected build directory: ${name}`);
  assert(info.size > 0, `Empty release file: ${name}`);
}
for (const name of scripts) {
  const code = await readFile(resolve(root, name), 'utf8');
  assert(!/appsync-api\.|cognito-idp\.|cognito-identity\.|amazonaws\.com\//.test(code), 'Static site unexpectedly includes an AWS backend endpoint');
}
console.log(`Static build verified: ${entries.length} files, root-relative entry assets, no AWS backend or source maps.`);
