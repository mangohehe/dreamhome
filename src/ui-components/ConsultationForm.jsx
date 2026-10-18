import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './styles/ConsultationForm.module.css';

export default function ConsultationForm() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'San Jose',
    projectType: 'Home Addition & ADU',
    timeframe: 'Within 1–3 Months',
    note: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/michaelshao88888@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `[MSZ Website Inquiry] ${formData.city} - ${formData.projectType} - ${formData.name}`,
          _template: 'table',
          Client_Name: formData.name,
          Phone: formData.phone,
          Email: formData.email || 'N/A',
          City: formData.city,
          Project_Type: formData.projectType,
          Target_Timeline: formData.timeframe,
          Project_Details: formData.note || 'None provided'
        })
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true)) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitError(
        lang === 'en'
          ? 'Opening your email client to send directly...'
          : '网络请求受限，正在为您打开邮件客户端直接发送...'
      );
      const subject = encodeURIComponent(
        `[MSZ Consultation Request] ${formData.city} - ${formData.projectType} - ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nCity: ${formData.city}\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeframe}\nDetails: ${formData.note || 'N/A'}`
      );
      window.location.href = `mailto:michaelshao88888@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Info Column */}
          <div className={styles.infoCol}>
            <div className={styles.subBadge}>
              {lang === 'en'
                ? 'FREE ON-SITE CONSULTATION & ESTIMATE'
                : '免费专属咨询 · 现场勘验'}
            </div>
            <h2 className={styles.title}>
              {lang === 'en'
                ? 'Ready to Build or Transform Your Bay Area Home?'
                : '准备好开启您的居所蜕变之旅了吗？'}
            </h2>
            {lang === 'en' ? (
              <p className={styles.desc}>
                Whether you are planning a ground-up custom home, a high-yield backyard ADU, or a full-scale architectural remodel, schedule a <b>complimentary on-site evaluation and transparent project estimate</b> with our senior team.
              </p>
            ) : (
              <p className={styles.desc}>
                无论是计划扩建一套独立 ADU、建造定制新房，还是对现有住宅进行全屋翻新改造，欢迎直接与我们预约<b>现场免费勘验与方案规划</b>。
              </p>
            )}

            <div className={styles.trustPoints}>
              <div className={styles.point}>
                <span className={styles.pointIcon}>📐</span>
                <div>
                  <h4>
                    {lang === 'en'
                      ? 'On-Site Structural & Architectural Assessment'
                      : '资深建筑与结构专家现场答疑'}
                  </h4>
                  <p>
                    {lang === 'en'
                      ? 'Evaluate property setbacks, load-bearing structures, foundation conditions & layout feasibility'
                      : '评估地界红线、结构承重、地基稳固度与加建可行性'}
                  </p>
                </div>
              </div>
              <div className={styles.point}>
                <span className={styles.pointIcon}>📜</span>
                <div>
                  <h4>
                    {lang === 'en'
                      ? 'Bay Area Zoning & Fast-Track Permit Strategy'
                      : '湾区本地法规与 Permit 风险预判'}
                  </h4>
                  <p>
                    {lang === 'en'
                      ? 'Deep familiarity with Palo Alto, Los Gatos, Cupertino, Saratoga & San Jose building codes'
                      : '深谙 Palo Alto, San Jose, Los Gatos, Cupertino 等各市最新政策'}
                  </p>
                </div>
              </div>
              <div className={styles.point}>
                <span className={styles.pointIcon}>💰</span>
                <div>
                  <h4>
                    {lang === 'en'
                      ? 'Fair, Honest & Itemized Pricing'
                      : '市场合理公道价格 · 预算明细透明'}
                  </h4>
                  <p>
                    {lang === 'en'
                      ? 'Clear scope of work, factory-direct custom materials, and zero hidden change orders'
                      : '无中间转包溢价、无恶意增项，选材与施工标准清晰透明'}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.directContactBox}>
              <div className={styles.directIcon}>📞</div>
              <div>
                <span className={styles.directLabel}>
                  {lang === 'en' ? 'Direct Phone & Email' : '免费咨询专线 & 邮箱'}
                </span>
                <a href="tel:6504666666" className={styles.directPhone}>
                  650-466-6666
                </a>
                <span className={styles.directTime}>
                  ✉️ {lang === 'en' ? 'Email: ' : '邮箱：'}
                  <a href="mailto:michaelshao88888@gmail.com" style={{ textDecoration: 'underline' }}>
                    michaelshao88888@gmail.com
                  </a>
                </span>
                <span className={styles.directTime}>
                  {lang === 'en'
                    ? 'Monday – Sunday, 8:00 AM – 8:00 PM (PT)'
                    : '周一至周日 8:00 AM - 8:00 PM (PT)'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>
                    {lang === 'en'
                      ? 'Consultation Request Received!'
                      : '预约提交成功！'}
                  </h3>
                  {lang === 'en' ? (
                    <p>
                      Thank you for reaching out to MSZ Construction! Our senior project director will contact you within <b>24 hours</b> to discuss your property details and schedule your complimentary on-site visit.
                    </p>
                  ) : (
                    <p>
                      感谢您的信任！我们的资深工程顾问将在 <b>24 小时内</b>与您电话确认房屋细节，并为您安排工程师现场勘验时间。
                    </p>
                  )}
                  <button
                    className={styles.resetBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    {lang === 'en' ? 'Submit Another Inquiry' : '提交另一条需求'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3 className={styles.formTitle}>
                    {lang === 'en'
                      ? 'Request a Free On-Site Consultation & Quote'
                      : '预约免费上门勘验与方案报价'}
                  </h3>
                  <p className={styles.formSub}>
                    {lang === 'en'
                      ? '1-on-1 consultation with our 20+ year Bay Area building team'
                      : '填写基本信息，20年经验团队一对一对接'}
                  </p>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>{lang === 'en' ? 'Your Name *' : '您的称呼 *'}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={lang === 'en' ? 'Enter your name' : '请输入您的称呼'}
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>{lang === 'en' ? 'Phone Number *' : '联系电话 *'}</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="650-000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>{lang === 'en' ? 'Email Address' : '电子邮箱'}</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>{lang === 'en' ? 'Property City *' : '房屋所在城市 *'}</label>
                      <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="San Jose">San Jose</option>
                        <option value="Palo Alto">Palo Alto</option>
                        <option value="Los Gatos">Los Gatos</option>
                        <option value="Cupertino">Cupertino</option>
                        <option value="Mountain View">Mountain View</option>
                        <option value="Sunnyvale">Sunnyvale</option>
                        <option value="Saratoga">Saratoga</option>
                        <option value="Fremont">Fremont</option>
                        <option value="Other">
                          {lang === 'en' ? 'Other Bay Area City' : '湾区其他城市 (Other)'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>{lang === 'en' ? 'Project Scope *' : '计划工程类型 *'}</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="Home Addition & ADU">
                          {lang === 'en'
                            ? 'Home Addition & Backyard ADU'
                            : '房屋加建 & 后院 ADU 独立单元'}
                        </option>
                        <option value="Whole-Home Remodel">
                          {lang === 'en'
                            ? 'Whole-Home Remodel & Renovation'
                            : '全屋翻新 & 房产增值改造'}
                        </option>
                        <option value="Custom New Home">
                          {lang === 'en'
                            ? 'Ground-Up Custom Home Build'
                            : '定制新房建造 (Custom Home)'}
                        </option>
                        <option value="Luxury Kitchen & Bath">
                          {lang === 'en'
                            ? 'Luxury Kitchen & Bathroom Remodel'
                            : '高端厨卫空间翻新重构'}
                        </option>
                        <option value="Structural & MEP Upgrade">
                          {lang === 'en'
                            ? 'Structural & 200A/400A MEP Upgrade'
                            : '结构加固与水电气 MEP 升级'}
                        </option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>{lang === 'en' ? 'Target Timeline' : '期望开工时间'}</label>
                      <select
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleChange}
                      >
                        <option value="Ready to Start">
                          {lang === 'en' ? 'Ready to Start Immediately' : '立即启动 (Ready now)'}
                        </option>
                        <option value="Within 1–3 Months">
                          {lang === 'en' ? 'Within 1–3 Months' : '1~3 个月内 (1-3 months)'}
                        </option>
                        <option value="Within 3–6 Months">
                          {lang === 'en' ? 'Within 3–6 Months' : '3~6 个月内 (3-6 months)'}
                        </option>
                        <option value="Early Planning Stage">
                          {lang === 'en' ? 'Early Planning & Budgeting' : '前期咨询策划中 (Planning)'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      {lang === 'en' ? 'Brief Project Notes (Optional)' : '项目简要描述（选填）'}
                    </label>
                    <textarea
                      name="note"
                      rows="3"
                      placeholder={
                        lang === 'en'
                          ? 'e.g., Existing 1,800 sq.ft. residence; looking to build an 800 sq.ft. detached ADU or remodel the kitchen and primary bath...'
                          : '例如：现有 1800 sqft，计划后院加建 800 sqft ADU，需要协助做 City Permit 报批和全套设计施工...'
                      }
                      value={formData.note}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {submitError && (
                    <div style={{ fontSize: '13px', color: '#8E652E', marginBottom: '8px' }}>
                      {submitError}
                    </div>
                  )}

                  <button type="submit" className={styles.submitBtn} disabled={submitting}>
                    <span>
                      {submitting
                        ? lang === 'en'
                          ? 'Sending Consultation Request...'
                          : '正在发送预约信息至邮箱...'
                        : lang === 'en'
                        ? 'Request My Free On-Site Estimate'
                        : '立即提交预约 · 开启免费评估'}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>

                  <div className={styles.privacyNote}>
                    {lang === 'en'
                      ? '🔒 100% Confidential. Your information is never shared with third parties.'
                      : '🔒 我们严格尊重您的隐私。承诺绝不透露给任何第三方，绝无骚扰推销。'}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
