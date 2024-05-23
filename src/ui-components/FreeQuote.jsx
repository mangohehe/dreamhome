import React from 'react';
import styles from './styles/FreeQuote.module.css'; // Import the CSS module

const FreeQuote = () => {
  return (
    <div className={styles.container}>
      <img src="path/to/your/image.jpg" alt="Yara is looking forward to your call" className={styles.headerImage} />
      <p className={styles.caption}>Yara is looking forward to your call</p>
      <h2 className={styles.callHeader}>Call (408) 790-1418</h2>
      <p className={styles.subheader}>
        Or submit the following form and we'll call you to schedule an appointment for a complimentary consultation.
      </p>
      <p className={styles.note}>
        <strong>Please note:</strong> We only accept building and remodeling requests here. Any others will be sent to spam. If you need to speak to us for other reasons, please call or use the form on our <a href="/contact">contact page</a>.
      </p>
      <form className={styles.form}>
        <label className={styles.label}>
          Name (Required)
          <div className={styles.nameFields}>
            <input type="text" name="firstName" placeholder="First" required />
            <input type="text" name="lastName" placeholder="Last" required />
          </div>
        </label>
        <label className={styles.label}>
          Email (Required)
          <div className={styles.emailFields}>
            <input type="email" name="email" placeholder="Enter Email" required />
            <input type="email" name="confirmEmail" placeholder="Confirm Email" required />
          </div>
        </label>
        <label className={styles.label}>
          Phone (Required)
          <input type="tel" name="phone" placeholder="Phone" required />
        </label>
        <label className={styles.label}>
          Which would you prefer? (Required)
          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="preference" value="callback" required /> Just a call back, please
            </label>
            <label>
              <input type="radio" name="preference" value="consultation" required /> A design/build consultation
            </label>
            <label>
              <input type="radio" name="preference" value="questions" required /> I have some questions first
            </label>
          </div>
        </label>
        <label className={styles.label}>
          A zebra is black and ______? (Required)
          <input type="text" name="zebra" placeholder="Fill in the blank..." required />
        </label>
        <p className={styles.charCount}>0 of 5 max characters</p>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      <p className={styles.footerNote}>
        If you don't see a "Let's Talk" form SUBMIT button, chances are you have not filled out all the required fields or you are using this form in a way it is not intended. If this is incorrect, please call us instead!
      </p>
    </div>
  );
};

export default FreeQuote;
