import React from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './styles/TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const { lang } = useLanguage();

  const reviews =
    lang === 'en'
      ? [
          {
            id: 1,
            author: 'Palo Alto Homeowner',
            location: '📍 Palo Alto · Santa Clara County',
            project: '850 sq.ft. Detached Backyard ADU',
            stars: '★★★★★',
            highlight: 'Fast permit approval, first-pass City inspections, and truly fair pricing!',
            content:
              '“Our backyard involved protected oak tree roots and utility easements. Two other builders quoted inflated prices and warned of a six-month permit delay. MSZ’s 20-year team engineered a smart foundation layout, got our Palo Alto permit approved quickly, and priced the project very fairly. Their electrical and plumbing work was immaculate.”'
          },
          {
            id: 2,
            author: 'Los Gatos Homeowner',
            location: '📍 Los Gatos · Silicon Valley',
            project: '3,200 sq.ft. Whole-Home Structural Remodel',
            stars: '★★★★★',
            highlight: 'Seasoned in-house craftsmen, spotless jobsite, and delivered right on schedule!',
            content:
              '“Our biggest fear in the Bay Area was hiring a contractor who subcontracts to random crews or walks off mid-job. MSZ’s dedicated electrical, framing, stone, and finish teams handled everything with incredible precision. The jobsite was kept clean every single day, the pricing was honest and transparent, and the finished home exceeded our expectations.”'
          },
          {
            id: 3,
            author: 'Cupertino Homeowner',
            location: '📍 Cupertino · South Bay',
            project: '600 sq.ft. Home Addition + Custom Kitchen & Baths',
            stars: '★★★★★',
            highlight: 'Itemized transparent quote, zero surprise change orders, and factory-direct cabinetry!',
            content:
              '“After comparing five Bay Area contractors, MSZ stood out for their clear, itemized budget and zero hidden fees. Because they fabricated our walnut kitchen cabinetry and quartz waterfall island in their own facility, we got luxury custom quality while saving thousands. Smooth communication from initial blueprints to final inspection.”'
          }
        ]
      : [
          {
            id: 1,
            author: 'Palo Alto 屋主',
            location: '📍 Palo Alto · Santa Clara County',
            project: '850 sqft 后院独立 ADU 加建工程',
            stars: '★★★★★',
            highlight: '报建出图快，City 一次性通过，价格也很公道！',
            content:
              '“我家后院涉及保护树根系和市政地役权，原本问了两家公司都说要卡半年而且报价虚高。MSZ 团队有着 20 多年湾区经验，现场勘测后优化了地基方案，不仅价格非常合理实在，而且 Permit 很快就顺利批下来了！水电气全是他家专业师傅做的，排线极其规整！”'
          },
          {
            id: 2,
            author: 'Los Gatos 屋主',
            location: '📍 Los Gatos · Bay Area',
            project: '3,200 sqft 全屋翻新与改造工程',
            stars: '★★★★★',
            highlight: '二十年专业团队，做工扎实细致，工期准时！',
            content:
              '“在湾区建房改造最怕施工队层层外包和偷工减料。他们团队从电箱升级、木结构改造到奢石铺贴、木地板安装全是资深专业师傅亲自干，工地每天收拾得干干净净，收费也是市场上非常公道合理的价格，完工效果全家人都特别满意！”'
          },
          {
            id: 3,
            author: 'Cupertino 屋主',
            location: '📍 Cupertino · Silicon Valley',
            project: '全屋加建 600 sqft + 现代厨卫整体改造',
            stars: '★★★★★',
            highlight: '报价透明实在，全程零恶意增项，按期交钥匙！',
            content:
              '“对比了好几家湾区建筑商，MSZ 的报价最实在透明，从第一份预算表就列得清清楚楚，没有任何隐形收费。而且自有工厂定制的橱柜和石材台面帮我们省了一大笔预算。施工沟通顺畅，按期竣工交付，非常靠谱！”'
          }
        ];

  return (
    <section id="testimonials" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerBox}>
          <div className={styles.subBadge}>
            {lang === 'en'
              ? 'CLIENT TESTIMONIALS · BAY AREA HOMEOWNERS'
              : '板块三 · 湾区业主真实反馈'}
          </div>
          <h2 className={styles.mainTitle}>
            {lang === 'en'
              ? '20+ Years of Reputation Built on Craftsmanship & Fair Pricing'
              : '深耕湾区二十余年 · 好口碑来自扎实做工与公道价格'}
          </h2>
          {lang === 'en' ? (
            <p className={styles.desc}>
              We stand by <b>honest market pricing and uncompromising in-house craftsmanship</b> — which is why <b>over 90% of our projects come from direct homeowner referrals</b>:
            </p>
          ) : (
            <p className={styles.desc}>
              在湾区建筑市场，我们始终坚持<b>合理透明的市场价格与扎实专业工艺</b>，<b>90% 以上的工程来自老客户口碑推荐</b>：
            </p>
          )}
        </div>

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {reviews.map((r) => (
            <div key={r.id} className={styles.reviewCard}>
              <div className={styles.cardTop}>
                <div className={styles.stars}>{r.stars}</div>
                <span className={styles.verifiedBadge}>
                  {lang === 'en' ? '✓ Verified Homeowner' : '✓ 真实完工业主'}
                </span>
              </div>
              <h4 className={styles.cardHighlight}>{r.highlight}</h4>
              <p className={styles.cardContent}>{r.content}</p>
              <div className={styles.authorBox}>
                <div className={styles.avatarCircle}>🏡</div>
                <div>
                  <div className={styles.authorName}>{r.author}</div>
                  <div className={styles.authorLocation}>{r.location}</div>
                  <div className={styles.authorProject}>{r.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reference Network Promise */}
        <div className={styles.referenceBanner}>
          <div className={styles.refIcon}>🤝</div>
          <div className={styles.refText}>
            <h4>
              {lang === 'en'
                ? 'Local Homeowner Reference Network (Available Upon Request)'
                : '“老客户引荐与电话背书网络” (Reference Upon Request)'}
            </h4>
            {lang === 'en' ? (
              <p>
                Choosing the right builder is a major decision. With our past clients’ permission, we are happy to connect you with <b>homeowners in your neighborhood</b> to speak directly or tour a completed residence before signing.
              </p>
            ) : (
              <p>
                我们深知您下定决心建造居所的审慎。经多位老客户欣然授权，在您正式签约前，我们可协助您与<b>同地段、同加建类型的真实老业主通电话或预约实地看房</b>，听听最坦诚的第三方评价。
              </p>
            )}
          </div>
          <a href="#contact" className={styles.refBtn}>
            {lang === 'en' ? 'Request Client References' : '获取老客户真实背书'}
          </a>
        </div>
      </div>
    </section>
  );
}
