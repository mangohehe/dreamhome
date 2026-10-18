import React from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './styles/CompanySection.module.css';

import mepImg from '../../public/imgs/portfolio/mep-clean-panel.jpg';
import stoneImg from '../../public/imgs/portfolio/int-bath-marble.jpg';
import cabinetImg from '../../public/imgs/portfolio/int-kitchen-island.jpg';
import designImg from '../../public/imgs/portfolio/build-vaulted-framing.jpg';
import windowImg from '../../public/imgs/portfolio/ext-sunset.jpg';

export default function CompanySection() {
  const { lang } = useLanguage();

  const coreMetrics =
    lang === 'en'
      ? [
          {
            num: '20+ Yrs',
            label: 'Bay Area Building Heritage',
            sub: 'Career builders, not part-time industry crossovers'
          },
          {
            num: '0 Markup',
            label: 'Company-Owned Factory',
            sub: 'Direct-from-factory custom cabinetry & stone slabs'
          },
          {
            num: '100% In-House',
            label: 'Dedicated Master Trades',
            sub: 'Full-time MEP, stone & tile crews — zero day labor'
          },
          {
            num: 'Turnkey',
            label: 'Corporate Accountability',
            sub: 'From architectural blueprints & permits to final keys'
          }
        ]
      : [
          {
            num: '20+ 年',
            label: '专注湾区建筑本行',
            sub: '科班深耕一线，非半路跨界转行'
          },
          {
            num: '0 中间商',
            label: '自有橱柜与石材工厂',
            sub: '源头工厂自主加工，高定品质更省钱'
          },
          {
            num: '100% 自营',
            label: '专业施工团队与自有工厂',
            sub: '电气水暖 · 奢石瓷砖 · 橱柜定制全自营'
          },
          {
            num: '1 站式',
            label: '正规实体公司兜底',
            sub: '自有设计部极速批 Permit · 全责包完工'
          }
        ];

  const modeCards =
    lang === 'en'
      ? [
          {
            type: 'other',
            badge: 'COMMON PITFALL A',
            title: 'Part-Time / Crossover GCs',
            subtitle: 'Inexperienced tech crossovers & paper-only brokers',
            chain: ['Homeowner', 'Broker GC', 'Layered Subcontractors'],
            points: [
              {
                icon: '✕',
                bold: 'Theory Without Field Depth',
                text: 'Lack 20-year hands-on mastery of complex structural framing & hidden utilities.'
              },
              {
                icon: '✕',
                bold: '100% Subcontracted Labor',
                text: 'No in-house trade crews; every phase is bid out with compounding middleman markups.'
              },
              {
                icon: '✕',
                bold: 'Stalls on Complex Issues',
                text: 'Unfamiliarity with municipal codes leads to endless plan-check revisions and change orders.'
              }
            ]
          },
          {
            type: 'other',
            badge: 'COMMON PITFALL B',
            title: 'Traditional Solo Contractors',
            subtitle: 'Fragmented "one-man truck" & temporary day labor',
            chain: ['Homeowner', 'Solo Operator', 'Day Labor + Retail Supply'],
            points: [
              {
                icon: '✕',
                bold: 'No Design Integration',
                text: 'Disconnected outside blueprints and field execution result in costly mid-build rework.'
              },
              {
                icon: '✕',
                bold: 'Retail Material Markups',
                text: 'No fabrication facility; custom cabinetry and stone slabs are purchased at retail prices.'
              },
              {
                icon: '✕',
                bold: 'Walk-Off & Delay Risk',
                text: 'Thin capital reserves mean a scheduling conflict elsewhere can leave your home unfinished.'
              }
            ]
          },
          {
            type: 'msz',
            badge: 'THE MSZ INTEGRATED MODEL',
            title: 'MSZ Construction',
            subtitle: '20+ Years · In-House Architecture, Factory & Master Trades',
            chain: ['Homeowner', 'MSZ Integrated Firm (Studio + Factory + Master Crews)'],
            points: [
              {
                icon: '✓',
                bold: '20+ Years Career Builders',
                text: 'Hundreds of custom homes, additions & ADUs delivered across Palo Alto, Los Gatos & the Bay Area.'
              },
              {
                icon: '✓',
                bold: 'Factory-Direct Fabrication',
                text: 'Our own millwork and stone plant delivers bespoke architectural finishes at direct factory pricing.'
              },
              {
                icon: '✓',
                bold: 'Dedicated Crews & Corporate Backing',
                text: 'Full-time MEP & stone teams backed by enterprise project management through final City sign-off.'
              }
            ]
          }
        ]
      : [
          {
            type: 'other',
            badge: '湾区常见踩坑模式 A',
            title: '跨界转行新手 GC',
            subtitle: '非建筑本行 / Engineer 半路转行',
            chain: ['业主', '转行中介 GC', '层层外包施工队'],
            points: [
              { icon: '✕', bold: '纸上谈兵缺实战', text: '非建筑科班出身，缺乏 20 年现场结构与隐蔽工程经验' },
              { icon: '✕', bold: '手头无自有工匠', text: '水电、石材全靠转包分包，中间层层加价且品控脱节' },
              { icon: '✕', bold: '遇复杂问题卡壳', text: '遇到老房结构隐患或市政严苛审图，频繁变更与追加预算' }
            ]
          },
          {
            type: 'other',
            badge: '湾区常见踩坑模式 B',
            title: '传统个人包工头',
            subtitle: '单打独斗 / 临时拼凑散工',
            chain: ['业主', '个人工头', '临时散工 + 零售建材'],
            points: [
              { icon: '✕', bold: '无内部设计能力', text: '图纸与现场施工脱节，审美受限且沟通耗时费力' },
              { icon: '✕', bold: '零售采购成本高', text: '无自有加工厂，定制橱柜与石材靠外部采购、价格昂贵' },
              { icon: '✕', bold: '抗风险弱易停工', text: '无正规公司体系与资金兜底，多工地撞期极易半途烂尾' }
            ]
          },
          {
            type: 'msz',
            badge: 'MSZ 实体全自营模式',
            title: 'MSZ Construction',
            subtitle: '20年建筑正规军 · 设计 + 工厂 + 施工全自营',
            chain: ['业主', 'MSZ 实体总包（设计部 + 自有工厂 + 专业施工团队）'],
            points: [
              { icon: '✓', bold: '20年建筑本行深耕', text: '扎根湾区建筑一线 20 余年，数百套实景完工与极速 Permit 经验' },
              { icon: '✓', bold: '自有工厂出厂直供', text: '自家工厂加工定制橱柜与石材，砍掉中间商，更低价格享高奢品质' },
              { icon: '✓', bold: '专业团队 + 公司兜底', text: '专业的电气水暖与奢石瓷砖团队施工，正规公司体系支撑，100% 按期交钥匙' }
            ]
          }
        ];

  const craftCards =
    lang === 'en'
      ? [
          {
            title: 'Professional Electrical & Plumbing Teams',
            tag: 'MEP INFRASTRUCTURE · FIRST-PASS INSPECTION',
            desc: '200A/400A main service panel upgrades, whole-house copper re-piping & Title 24 electrical systems executed by our dedicated licensed specialists.',
            img: mepImg,
            chips: ['200A/400A Panel Upgrades', 'Whole-Home MEP Systems', 'First-Pass City Inspection']
          },
          {
            title: 'Luxury Stone Fabrication & Large-Format Tile',
            tag: 'IN-HOUSE STONE CUTTING · BESPOKE MASONRY',
            desc: 'Precision in-house slab fabrication and master installation — mitered waterfall kitchen islands, bookmatched stone walls, and luxury spa bathrooms.',
            img: stoneImg,
            chips: ['In-House Stone Cutting', 'Mitered Waterfall Islands', 'Large-Format Porcelain Tile']
          },
          {
            title: 'Factory-Direct Custom Cabinetry & Millwork',
            tag: 'OWNED MILLWORK FACTORY · ZERO MARKUP',
            desc: 'Custom walnut kitchens, walk-in closets, and floating vanities built to exact architectural dimensions in our own facility at direct pricing.',
            img: cabinetImg,
            chips: ['In-House Factory Production', 'Factory-Direct Pricing', 'Bespoke Architectural Millwork']
          },
          {
            title: 'In-House Architectural & Structural Studio',
            tag: 'ARCHITECTURE · STRUCTURAL · PERMITTING',
            desc: 'Full-service internal design studio handling architectural elevations, vaulted daylight planning, seismic engineering, and expedited City permits.',
            img: designImg,
            chips: ['In-House Design Studio', 'Expedited City Permits', 'Seamless Field Execution']
          },
          {
            title: 'Full Turnkey Service — From Blueprints to Handover',
            tag: 'DESIGN · PERMITS · BUILD · FINAL DELIVERY',
            desc: 'Single-source accountability across every stage — from initial architectural drawings and permitting to factory fabrication, construction, and final keys.',
            img: windowImg,
            chips: ['Architectural Blueprints', 'Permits & Full Construction', 'Turnkey Final Delivery']
          }
        ]
      : [
          {
            title: '专业的电气与水暖团队',
            tag: '核心隐蔽工程 · 一次过检',
            desc: '200A/400A 主电表箱扩容升级、全屋铜线与给排水重布，专业持证团队规范施工。',
            img: mepImg,
            chips: ['200A/400A 电表箱升级', '全屋强弱电与水路', 'City 严苛验收一次过']
          },
          {
            title: '奢石切割与大板瓷砖团队',
            tag: '自有石材加工 · 豪宅收口',
            desc: '自有工厂精准石材切割与专业精工团队铺贴，涵盖瀑布中岛台面、岩板背景墙与高奢卫浴大板瓷砖。',
            img: stoneImg,
            chips: ['自有工厂石材切割', '厨房瀑布中岛台面', '高奢卫浴大板瓷砖']
          },
          {
            title: '自有工厂定制橱柜与木作',
            tag: '源头工厂直供 · 高配更省钱',
            desc: '自有工厂按尺寸自主生产厨房高柜、胡桃木中岛与衣帽间，省去经销商溢价。',
            img: cabinetImg,
            chips: ['自有工厂自主生产', '出厂价直供业主', '全屋高定木作系统']
          },
          {
            title: '健全高级的自有设计团队',
            tag: '建筑 · 室内 · 结构 · Permit',
            desc: '内部高级设计团队一站包办建筑立面、挑高采光、结构计算与市政极速报批。',
            img: designImg,
            chips: ['内部全建制设计部', '极速获批 Permit', '设计施工零误差落地']
          },
          {
            title: '从设计画图到竣工交付 · 全站式服务',
            tag: '设计 · 画图 · 报批 · 施工 · 交付全包',
            desc: '从前期建筑与室内设计画图、City Permit 报批、自有工厂定制，一直负责到全案施工与最终验收交钥匙，真正的一站式全包服务。',
            img: windowImg,
            chips: ['建筑与室内设计画图', 'Permit 报批与全案施工', '一管到底直至竣工交付']
          }
        ];

  const steps =
    lang === 'en'
      ? [
          { num: '01', title: 'On-Site Assessment', desc: 'Structural, zoning & budget evaluation' },
          { num: '02', title: 'In-House Design', desc: 'Architectural, interior & structural plans' },
          { num: '03', title: 'Fast-Track Permits', desc: 'Expedited municipal plan-check approval' },
          { num: '04', title: 'Factory Production', desc: 'Custom cabinetry & stone cut in-house' },
          { num: '05', title: 'Master Trade Build', desc: 'Dedicated MEP, framing & stone crews' },
          { num: '06', title: 'Turnkey Handover', desc: 'Final City sign-off & corporate warranty' }
        ]
      : [
          { num: '01', title: '免费上门勘测', desc: '实测结构地界与预算评估' },
          { num: '02', title: '自有团队设计', desc: '建筑、室内与结构一体化出图' },
          { num: '03', title: '极速批 Permit', desc: '熟稔湾区各市规范快速获批' },
          { num: '04', title: '自有工厂生产', desc: '橱柜与石材同步自主加工' },
          { num: '05', title: '专业团队施工', desc: '电气水暖、奢石瓷砖专班严控' },
          { num: '06', title: '公司兜底交付', desc: '顺利过检交钥匙与完善质保' }
        ];

  return (
    <section id="team" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Concise Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.subBadge}>
            {lang === 'en'
              ? 'WHY MSZ CONSTRUCTION · VERTICAL INTEGRATION'
              : 'WHY MSZ CONSTRUCTION · 为什么选择我们'}
          </div>
          <h2 className={styles.mainTitle}>
            {lang === 'en'
              ? 'Established Design-Build Firm vs. Crossover Brokers & Solo Contractors'
              : '一眼看清：20 年建筑正规军 vs 跨界新手与个人包工头'}
          </h2>
          {lang === 'en' ? (
            <p className={styles.desc}>
              Building in the Bay Area demands proven field expertise and financial stability. Our vertically integrated model — uniting <b>In-House Architecture + Company-Owned Factory + Dedicated Master Trade Crews + Corporate Backing</b> — eliminates middleman markups and mid-project stalls.
            </p>
          ) : (
            <p className={styles.desc}>
              在湾区建房，选择比努力更重要。我们用<b>「自有设计部 + 自有加工厂 + 专业施工团队 + 正规公司兜底」</b>的完整实体闭环，让您彻底告别层层外包加价与半途停工风险。
            </p>
          )}
        </div>

        {/* 1. 4 Big Metric Cards (Scannable in 2 seconds) */}
        <div className={styles.metricsRow}>
          {coreMetrics.map((m, idx) => (
            <div key={idx} className={styles.metricCard}>
              <div className={styles.metricNum}>{m.num}</div>
              <div className={styles.metricLabel}>{m.label}</div>
              <div className={styles.metricSub}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* 2. Visual 3-Mode Comparison Diagram */}
        <div className={styles.modesGrid}>
          {modeCards.map((card, idx) => (
            <div
              key={idx}
              className={`${styles.modeCard} ${card.type === 'msz' ? styles.modeCardMsz : styles.modeCardOther}`}
            >
              <div className={styles.modeTop}>
                <span className={styles.modeBadge}>{card.badge}</span>
                <h3 className={styles.modeTitle}>{card.title}</h3>
                <p className={styles.modeSubtitle}>{card.subtitle}</p>
              </div>

              {/* Visual Chain Flow */}
              <div className={styles.chainBar}>
                {card.chain.map((node, i) => (
                  <React.Fragment key={i}>
                    <span className={styles.chainNode}>{node}</span>
                    {i < card.chain.length - 1 && <span className={styles.chainArrow}>→</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* 3 Scannable Points */}
              <div className={styles.modePoints}>
                {card.points.map((pt, i) => (
                  <div key={i} className={styles.modePointItem}>
                    <span className={card.type === 'msz' ? styles.iconCheck : styles.iconCross}>
                      {pt.icon}
                    </span>
                    <div>
                      <strong>{pt.bold}: </strong>
                      <span>{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3. Visual Craft Bento Grid with Real Project Photos */}
        <div id="trades" className={styles.tradesBlock}>
          <div className={styles.subHeader}>
            <span className={styles.stepTag}>
              {lang === 'en'
                ? 'SPECIALIZED IN-HOUSE DIVISIONS · REAL JOBSITE PHOTOGRAPHY'
                : '专业的人做专业的事 · 真实工地与成品实拍'}
            </span>
            <h3>
              {lang === 'en'
                ? 'Five Vertically Integrated Divisions Under One Roof'
                : '五大核心自营板块 · 严控每一道施工质量'}
            </h3>
          </div>

          <div className={styles.craftBentoGrid}>
            {craftCards.map((c, idx) => (
              <div
                key={idx}
                className={`${styles.craftCard} ${idx < 2 ? styles.craftCardLarge : styles.craftCardRegular}`}
              >
                <div className={styles.craftImgWrap}>
                  <img src={c.img} alt={c.title} className={styles.craftImg} loading="lazy" />
                  <span className={styles.craftOverlayTag}>{c.tag}</span>
                </div>
                <div className={styles.craftBody}>
                  <h4 className={styles.craftTitle}>{c.title}</h4>
                  <p className={styles.craftDesc}>{c.desc}</p>
                  <div className={styles.craftChips}>
                    {c.chips.map((chip, i) => (
                      <span key={i} className={styles.craftChip}>✓ {chip}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Compact 6-Step Turnkey Pipeline */}
        <div id="pipeline" className={styles.pipelineBlock}>
          <div className={styles.subHeader}>
            <span className={styles.stepTag}>
              {lang === 'en'
                ? 'SEAMLESS CORPORATE EXECUTION'
                : '正规公司全流程直营管理'}
            </span>
            <h3>
              {lang === 'en'
                ? 'From Architectural Blueprints & Factory Production to Final Keys · 6 Steps'
                : '从设计报批、自有工厂生产到专班交付 · 六步省心闭环'}
            </h3>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((st, i) => (
              <div key={i} className={styles.stepItem}>
                <div className={styles.stepNum}>{st.num}</div>
                <h4 className={styles.stepTitle}>{st.title}</h4>
                <p className={styles.stepDesc}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
