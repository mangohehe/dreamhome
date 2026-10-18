import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './styles/Hero.module.css';
import siteImg from '../../public/imgs/hero-bayarea-site-v3.jpg';
import completedImg from '../../public/imgs/hero-bayarea-completed-v3.jpg';

export default function Hero() {
  const { lang } = useLanguage();
  const [scanPosition, setScanPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const stageRef = useRef(null);

  useEffect(() => {
    if (!autoPlay || isDragging) return;

    let animationFrameId;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const nextPos = 50 + 34 * Math.sin(elapsed * 0.8);
      setScanPosition(nextPos);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoPlay, isDragging]);

  const handleStageMove = (clientX) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = Math.max(6, Math.min(94, ((clientX - rect.left) / rect.width) * 100));
    setScanPosition(relX);
  };

  const corePillars =
    lang === 'en'
      ? [
          {
            title: '20+ Years Bay Area Team',
            sub: 'Seasoned master builders · Proven local track record',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
              </svg>
            )
          },
          {
            title: 'Fair & Transparent Pricing',
            sub: 'Clear itemized budgets · Zero hidden change orders',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            )
          },
          {
            title: 'Architecture & Fast Permits',
            sub: 'Full design-to-permit support across Bay Area cities',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            )
          },
          {
            title: 'Dedicated Master Trades',
            sub: 'Professional electrical, plumbing, stone & tile crews',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            )
          },
          {
            title: 'Licensed Class-B Contractor',
            sub: 'CSLB licensed, bonded & $2M+ insured in CA',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            )
          }
        ]
      : [
          {
            title: '20年资深专业团队',
            sub: '深耕湾区建筑一线 · 经验丰富技术过硬',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
              </svg>
            )
          },
          {
            title: '价格公道 · 预算透明',
            sub: '报价实在明细清晰 · 绝无隐形恶意增项',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            )
          },
          {
            title: '资深设计与极速 Permit',
            sub: '建筑结构室内设计 · 迅速获批市政许可',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            )
          },
          {
            title: '专业水电与奢石班底',
            sub: '专业电气水暖 · 奢石切割与大板瓷砖',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            )
          },
          {
            title: '加州正规 B 牌总包',
            sub: 'CSLB 官方认证 · 全额百万商业与工伤保险',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            )
          }
        ];

  return (
    <section
      id="home"
      className={styles.heroSection}
      onMouseMove={(e) => isDragging && handleStageMove(e.clientX)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <div className={styles.heroInner}>
        <div className={styles.heroCard}>
          {/* Main Clean Split Layout */}
          <div className={styles.heroMainGrid}>
            {/* Left: Concise Architectural Brand & Message */}
            <div className={styles.leftColumn}>
              <div className={styles.brandBadge}>
                <span className={styles.brandName}>MSZ CONSTRUCTION</span>
                <span className={styles.brandDivider}>|</span>
                <span className={styles.brandSub}>
                  {lang === 'en'
                    ? '20+ YEARS BAY AREA EXPERTISE · FAIR & TRANSPARENT PRICING'
                    : '深耕湾区 20 余年 · 价格公道透明'}
                </span>
              </div>

              {lang === 'en' ? (
                <>
                  <h1 className={styles.heroTitle}>
                    20+ Years of Master Craftsmanship.
                    <br />
                    Fair, Transparent Pricing.
                  </h1>
                  <p className={styles.heroSubtitle}>
                    For over two decades, our seasoned, deeply experienced Bay Area building team has delivered custom homes, additions, ADUs, and whole-home renovations with <strong>uncompromising structural & finish quality</strong> and <strong>honest, itemized, transparent pricing</strong> — giving your family complete peace of mind from blueprint to handover.
                  </p>
                </>
              ) : (
                <>
                  <h1 className={styles.heroTitle}>
                    二十年资深专业团队 · 价格公道透明
                    <br />
                    深耕湾区，用心筑造高品质理想家
                  </h1>
                  <p className={styles.heroSubtitle}>
                    深耕湾区建筑市场 <strong>20 多年</strong>，我们拥有一支<strong>经验丰富、技术过硬的绝对专业团队</strong>，始终坚持<strong>公道合理、清晰透明的市场价格</strong>。从画图设计、快速申请 Permit 到高标准施工交付，让您的建房与改造真正省心、放心。
                  </p>
                </>
              )}

              <div className={styles.ctaRow}>
                <a href="#contact" className={styles.primaryBtn}>
                  <span>
                    {lang === 'en'
                      ? 'Schedule a Free On-Site Consultation'
                      : '预约免费上门勘测与报价'}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="tel:6504666666" className={styles.secondaryBtn}>
                  📞 650-466-6666
                </a>
              </div>
            </div>

            {/* Right: Clean Dynamic Perspective Stage */}
            <div className={styles.rightColumn}>
              <div
                ref={stageRef}
                className={styles.viewport}
                onMouseDown={(e) => {
                  setAutoPlay(false);
                  setIsDragging(true);
                  handleStageMove(e.clientX);
                }}
                onTouchMove={(e) => {
                  if (e.touches && e.touches[0]) {
                    setAutoPlay(false);
                    handleStageMove(e.touches[0].clientX);
                  }
                }}
              >
                {/* Completed Modern Luxury Home */}
                <div className={styles.completedLayer}>
                  <img
                    src={completedImg}
                    alt={
                      lang === 'en'
                        ? 'MSZ Construction Completed Modern Bay Area Residence'
                        : '湾区现代豪宅完工实景'
                    }
                    className={styles.stageImage}
                    draggable={false}
                  />
                </div>

                {/* Bay Area Construction Site */}
                <div
                  className={styles.siteLayer}
                  style={{
                    clipPath: `polygon(0 0, ${scanPosition}% 0, ${scanPosition}% 100%, 0 100%)`
                  }}
                >
                  <img
                    src={siteImg}
                    alt={
                      lang === 'en'
                        ? 'MSZ Construction Bay Area Structural Framing Site'
                        : 'MSZ Construction 湾区阳光工地实景'
                    }
                    className={styles.stageImage}
                    draggable={false}
                  />
                </div>

                {/* Unobstructed Top-Right Perspective Indicator */}
                <div className={styles.perspectivePill}>
                  <span>{lang === 'en' ? '🏗️ Structural Framing' : '🏗️ 施工实景'}</span>
                  <span className={styles.pillArrow}>↔</span>
                  <span>{lang === 'en' ? '🏡 Completed Residence' : '🏡 落成实景'}</span>
                </div>

                {/* Smooth Dynamic Scan Line */}
                <div
                  className={styles.scanLineWrapper}
                  style={{ left: `${scanPosition}%` }}
                >
                  <div
                    className={styles.scanHandle}
                    title={
                      lang === 'en'
                        ? 'Drag left or right to compare framing and completed residence'
                        : '左右拖动对比施工与落成'
                    }
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m15 18 6-6-6-6M9 6l-6 6 6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Clean 5-Pillar Core Highlights Bar */}
          <div className={styles.pillarsBar}>
            {corePillars.map((item, idx) => (
              <div key={idx} className={styles.pillarItem}>
                <div className={styles.pillarIcon}>{item.icon}</div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{item.title}</h3>
                  <p className={styles.pillarSub}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
