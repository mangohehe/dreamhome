# DreamHome Project

## Getting Started

Before you begin, ensure you have the following installed:

* **Node.js:** (Mention the Node.js version or LTS version you recommend. E.g., "Node.js v16 or LTS version" or "Node.js v18 or higher") You can download it from [nodejs.org](https://nodejs.org/). (If you used nvm, you can add something like: "It is recommended to use Node Version Manager (nvm) to manage Node.js versions. See the nvm documentation for installation instructions: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)")
* **npm (Node Package Manager):** npm is usually installed with Node.js. You can check the version with `npm -v`.
* **Parcel:** (Specify the version if you have a strong preference. E.g., "Parcel v2") Install it globally:

```bash
npm install -g parcel

(If you are using yarn, replace the npm install commands with the yarn equivalent. e.g., `yarn global add parcel`)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/mangohehe/dreamhome.git
cd dreamHome
```

2. **Install dependencies:**

```bash
npm install
```

(or `yarn install` if you are using Yarn). This will install all the necessary packages listed in the `package.json` file.

## Running the Development Server

To start the development server (which will watch for file changes and automatically reload the browser), run:

```bash
npm run dev
```

This will typically start the development server on `http://localhost:<port>` (the port will usually be shown in the terminal).

## Building the Project

To create a production-ready build of your application, run:

```bash
npm run build
```

This will create a `dist` (or `build`) directory containing the optimized files for your application. You can then deploy the contents of this directory to your web server.

## Project Structure

```
DreamHome/
├── README.md
├── amplify/
│   └── ... (Your Amplify configuration files)
├── index.html
├── package.json
├── parcel_build.log (You might want to add this to your .gitignore)
├── public/
│   └── imgs/
│       └── ... (Your images)
└── src/
    ├── amplifyconfiguration.json
    ├── app.js
    ├── aws-exports.js
    ├── index.js
    └── ui-components/
        └── ... (Your UI components)
```

## Technologies Used

* React
* Parcel
* Amplify

## Contributing (Optional)

If you'd like to contribute to this project, please open an issue or submit a pull request.

## License (Optional)

(Specify the license under which your project is distributed. E.g., MIT, Apache 2.0, GPL, etc.)
```




## Production publishing: mszbayarea.com

This website is a static React build hosted with AWS Amplify Hosting. The hosting
configuration is in `amplify.yml`; it deliberately defines frontend build steps
only. The historical `amplify/backend/` resources are not provisioned by this
publishing setup.

- GitHub source: `mangohehe/dreamhome`, production branch `main`.
- Build: Node.js 22, `npm ci`, `npm run build`, `npm run check:build`.
- Published directory: `build/`; images are bundled from this repository.
- Publishing needs no separate S3 bucket, database, authentication or server.
- The existing consultation form uses its configured external form provider.
  Hosting does not provision or validate that external mailbox service.
- The two local PDF previews are not release inputs.

After the Amplify GitHub connection is configured, pushing to `main` triggers
an automatic build and deployment. Use the Amplify deployment status to verify
that a commit reached production. For local release checks, use:

```sh
npm ci
npm run build
npm run check:build
```

### Cost target

The goal is below $1/month at low traffic, excluding domain registration/renewal.
Using standard pay-as-you-go rates (without relying on free-tier eligibility),
20 builds/month at 2 minutes each are about $0.40; serving 0.6 GB/month is about
$0.09. Static storage is a small additional charge. Actual costs depend on
build frequency, stored deployments and traffic; $1 is a target, not a hard cap.
No paid WAF, SSR, backend provisioning or additional DNS hosted zone is required.
Pricing reference: https://aws.amazon.com/amplify/pricing/
