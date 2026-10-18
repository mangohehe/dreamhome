import React from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './styles/Footer.module.css';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <div className={styles.brandLogo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <span className={styles.brandTitle}>MSZ CONSTRUCTION</span>
                <span className={styles.brandSub}>
                  {lang === 'en'
                    ? '20+ YEARS BAY AREA DESIGN & BUILD'
                    : '湾区二十年 · 一站式精工建筑'}
                </span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              {lang === 'en'
                ? 'California Licensed Class-B General Building Contractor. Backed by 20+ years of Bay Area field expertise, in-house architectural design, company-owned millwork & stone fabrication, and dedicated master trade crews.'
                : '加州正规总承包商 (B-General Building Contractor)。深耕湾区二十余年，拥有资深设计与结构团队、自有定制加工厂及专业水电石材施工班底，为湾区家庭提供省心、透明、高品质的一站式建房服务。'}
            </p>
            <div className={styles.licensePill}>
              <span>📜 CSLB Lic. #B-General · Bonded & Insured</span>
            </div>
          </div>

          {/* Core Services Col */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>
              {lang === 'en' ? 'Core Turnkey Services' : '核心全案业务'}
            </h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#pipeline">
                  {lang === 'en' ? 'Home Additions & Expansions' : '房屋加建 (Home Additions)'}
                </a>
              </li>
              <li>
                <a href="#pipeline">
                  {lang === 'en' ? 'Detached Backyard ADUs' : '后院独立居住单元 (ADU)'}
                </a>
              </li>
              <li>
                <a href="#pipeline">
                  {lang === 'en' ? 'Whole-Home Remodeling' : '全屋翻新 · 房产增值 (Flip)'}
                </a>
              </li>
              <li>
                <a href="#pipeline">
                  {lang === 'en' ? 'Ground-Up Custom Homes' : '现代定制独栋私宅 (Custom Home)'}
                </a>
              </li>
              <li>
                <a href="#pipeline">
                  {lang === 'en' ? 'Architectural Plans & Fast Permits' : '湾区各市 Permit 极速代办'}
                </a>
              </li>
              <li>
                <a href="#trades">
                  {lang === 'en'
                    ? 'MEP · Luxury Stone · In-House Millwork'
                    : '电气水暖 · 奢石瓷砖 · 自有工厂 · 全站式服务'}
                </a>
              </li>
            </ul>
          </div>

          {/* Cities Col */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>
              {lang === 'en' ? 'Primary Service Areas' : '主要服务区域'}
            </h4>
            <ul className={styles.linkList}>
              <li><a href="#contact">Palo Alto & Los Altos</a></li>
              <li><a href="#contact">Los Gatos & Saratoga</a></li>
              <li><a href="#contact">Cupertino & Sunnyvale</a></li>
              <li><a href="#contact">San Jose & Santa Clara</a></li>
              <li><a href="#contact">Mountain View & Menlo Park</a></li>
              <li><a href="#contact">Fremont & Greater Bay Area</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>
              {lang === 'en' ? 'Contact Us' : '联系我们'}
            </h4>
            <p className={styles.contactLine}>
              <b>{lang === 'en' ? 'Direct Line: ' : '咨询专线：'}</b>
              <a href="tel:6504666666" className={styles.contactPhone}>650-466-6666</a>
            </p>
            <p className={styles.contactLine}>
              <b>{lang === 'en' ? 'Email: ' : '电子邮箱：'}</b>
              <a href="mailto:michaelshao88888@gmail.com" style={{ color: 'inherit' }}>
                michaelshao88888@gmail.com
              </a>
            </p>
            <p className={styles.contactLine}>
              <b>{lang === 'en' ? 'Hours: ' : '服务时间：'}</b>
              <span>
                {lang === 'en' ? 'Mon – Sun, 8:00 AM – 8:00 PM' : '周一至周日 8:00 AM - 8:00 PM'}
              </span>
            </p>
            <a href="#contact" className={styles.footerEstimateBtn}>
              {lang === 'en' ? 'Schedule Free Site Visit' : '免费预约现场勘验'}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} MSZ Construction. All rights reserved.</p>
          <div className={styles.bottomNotes}>
            <span>California State Licensed B-Contractor</span>
            <span>·</span>
            <span>Commercial General Liability & Worker's Comp Protected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
