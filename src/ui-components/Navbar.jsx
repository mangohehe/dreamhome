import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './styles/Navbar.module.css';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks =
    lang === 'en'
      ? [
          { name: 'Home', href: '#home' },
          { name: 'Why MSZ', href: '#team' },
          { name: 'In-House Trades', href: '#trades' },
          { name: 'Turnkey Process', href: '#pipeline' },
          { name: 'Portfolio', href: '#projects' },
          { name: 'Client Reviews', href: '#testimonials' }
        ]
      : [
          { name: '首页', href: '#home' },
          { name: '二十年实力与保障', href: '#team' },
          { name: '核心专业团队', href: '#trades' },
          { name: '一站式全案', href: '#pipeline' },
          { name: '精选案例库', href: '#projects' },
          { name: '真实口碑', href: '#testimonials' }
        ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      {/* Top Banner Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.badgePill}>
            <span className={styles.pulseDot}></span>
            <span className={styles.desktopBadgeText}>
              {lang === 'en'
                ? 'California Licensed Class-B General Contractor · 20+ Years Bay Area Experience · Fair & Transparent Pricing'
                : '加州正规总承包商 (General Contractor B 牌) · 20余年湾区建房经验 · 价格透明公道'}
            </span>
            <span className={styles.mobileBadgeText}>
              {lang === 'en'
                ? 'CA Licensed Class-B · 20+ Yrs Bay Area Experts'
                : '加州正规 B 牌总包 · 深耕湾区 20 余年'}
            </span>
          </div>
          <div className={styles.topRight}>
            <span className={styles.serviceCities}>
              {lang === 'en'
                ? 'Serving Palo Alto · Los Gatos · Cupertino · Saratoga · San Jose & Bay Area'
                : '服务区域：San Jose · Palo Alto · Los Gatos · Cupertino · 湾区全境'}
            </span>
            <a href="tel:6504666666" className={styles.topPhone}>
              📞 650-466-6666
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.mainNav}>
        <div className={styles.navContainer}>
          <a href="#home" className={styles.brand}>
            <div className={styles.brandLogo}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>MSZ CONSTRUCTION</span>
              <span className={styles.brandSubtitle}>
                {lang === 'en'
                  ? '20+ YRS BAY AREA DESIGN & BUILD'
                  : '深耕湾区二十余年 · 一站式精工建房'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className={styles.navLinks}>
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions + Prominent Language Switcher */}
          <div className={styles.navActions}>
            <button
              type="button"
              className={styles.langSwitchBtn}
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              aria-label="Switch Language"
              title={lang === 'en' ? '切换至中文版本' : 'Switch to English Version'}
            >
              <span className={`${styles.langOption} ${lang === 'en' ? styles.langOptionActive : ''}`}>
                EN
              </span>
              <span className={`${styles.langOption} ${lang === 'zh' ? styles.langOptionActive : ''}`}>
                中文
              </span>
            </button>

            <a href="tel:6504666666" className={styles.phoneButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>650-466-6666</span>
            </a>

            <a href="#contact" className={styles.ctaButton}>
              {lang === 'en' ? 'Free On-Site Estimate' : '预约免费现场勘测'}
            </a>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12"/>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Always-Visible Mobile Quick Action Bar (Phone + Free Estimate on iPhone) */}
        <div className={styles.mobileQuickBar}>
          <a href="tel:6504666666" className={styles.mobileQuickPhone}>
            📞 650-466-6666
          </a>
          <a href="#contact" className={styles.mobileQuickEstimate}>
            {lang === 'en' ? '📅 Free On-Site Estimate' : '📅 预约免费现场勘测'}
          </a>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={styles.mobileDropdown}>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className={styles.mobileCtaBox}>
              <a href="tel:6504666666" className={styles.mobilePhoneBtn}>
                {lang === 'en' ? '📞 Call Now: 650-466-6666' : '📞 立即致电：650-466-6666'}
              </a>
              <a
                href="#contact"
                className={styles.mobileQuoteBtn}
                onClick={() => setMobileMenuOpen(false)}
              >
                {lang === 'en' ? 'Schedule Free On-Site Estimate' : '预约现场免费勘测'}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
