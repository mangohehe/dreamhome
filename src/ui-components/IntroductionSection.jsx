import React from 'react';
import styles from './styles/IntroductionSection.module.css';

const IntroductionSection = ({ width = '80%', height = 'auto' }) => {
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
                <div className={`${styles.elementorHeadingTitle} ${styles.customHeading}`}>
                  <span>Bay Builders &amp; Remodeling is a Bay Area general contractor dedicated to providing</span>
                  <span>all our customers with a pleasant, stress-free and unforgettable home-build</span>
                  <span>or remodel experience, from concept to completion.</span>
                </div>
              </div>
            </div>
            <div
              className={styles.elementorElement}
              data-id="de96868"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className={styles.elementorWidgetContainer}>
                <div className={`${styles.elementorHeadingTitle} ${styles.customSubheading}`}>
                  It shows in our work. It shows in our reviews.
                </div>
              </div>
            </div>
            <section
              className={styles.elementorSection}
              data-id="2af4fd9"
              data-element_type="section"
            >
              <div className={styles.elementorContainer}>
                <div
                  className={styles.elementorColumn}
                  data-id="696301a"
                  data-element_type="column"
                >
                  <div className={styles.elementorWidgetWrap}>
                    <div
                      className={styles.elementorElement}
                      data-id="f4c3a6e"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className={styles.elementorWidgetContainer}>
                        <p className={styles.customParagraph}>
                          Located in San Jose but serving the Bay Area’s Silicon Valley cities of Los Gatos, <a href="https://baybuilders.com/general-contractor-san-jose/" className={styles.customLink}>San Jose</a>, Cupertino, Mountain View, <a href="https://baybuilders.com/general-contractor-palo-alto/" className={styles.customLink}>Palo Alto</a>, Redwood City, San Bruno, Fremont and all points in between
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
