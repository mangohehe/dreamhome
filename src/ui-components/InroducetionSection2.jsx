import React from 'react';
import styles from './styles/IntroductionSection.module.css'; // Import the CSS module

const IntroductionSection2 = ({ width = '80%', height = 'auto' }) => {
  return (
    <section
      className={styles.elementorSection}
      style={{ width, height }} // Apply width and height
      data-id="601e97f"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className={styles.elementorContainer}>
        <div
          className={styles.elementorColumn}
          data-id="ff3e005"
          data-element_type="column"
        >
          <div className={styles.elementorWidgetWrap}>
            <div
              className={styles.elementorElement}
              data-id="e655ff6"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className={styles.elementorWidgetContainer}>
                <div className={`${styles.elementorHeadingTitle} ${styles.customHeading2}`}>
                  We are committed to exceptionalism in craftsmanship, integrity, and professionalism every step of the way from the first phone call to the final brush stroke.
                </div>
              </div>
            </div>
            <div
              className={styles.elementorElement}
              data-id="de96868"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className={styles.elementorWidgetContainer}>
                <p className={styles.customParagraph2}>
                  At Bay Builders &amp; Remodeling, it is our goal as a Bay Area general contractor to provide exceptional home remodeling and custom construction services that <strong>exceed all our clients’ expectations</strong>. We strive to execute to perfection, from the foundation to the final brush stroke with <strong>superior craftsmanship, attention to detail, and outstanding customer service</strong>.
                </p>
                <p className={styles.customParagraph2}>
                  But even more than that, from kitchen and bathroom renovations to whole-house remodels and custom builds, we work closely with our clients to <strong>ensure that the vision for their home is not only brought to life</strong>, but in the end, they really do feel <strong>they finally have a place called home</strong>.
                </p>
              </div>
            </div>
            <div
              className={styles.elementorElement}
              data-id="f4c3a6e"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className={styles.elementorWidgetContainer}>
                <a className={styles.customButton} href="#">
                  LEARN MORE ABOUT BAY BUILDERS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection2;
