import React, { useState, useRef } from 'react';
import styles from './FirstScreen.module.css';
import heroImage from '../images/שלי מאיר ללא רקע.png';

const FirstScreen = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    acceptedTerms: false
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "shelimeir998@gmail.com";

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // וולידציה למייל
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // וולידציה לטלפון (מספר ישראלי)
  const isValidPhone = (phone) => {
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    return phoneRegex.test(phone.replace(/[-\s]/g, ''));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    const { fullName, phoneNumber, acceptedTerms } = formData;
    
    // Validate inputs
    let valid = true;
    const newErrors = {};

    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    }

    // Validate phone number
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!isValidPhone(phoneNumber)) {
      newErrors.phoneNumber = 'נא להזין מספר טלפון תקין';
      valid = false;
    }

    // Check if terms are accepted
    if (!acceptedTerms) {
      alert('יש לאשר את תקנון האתר');
      return;
    }

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: fullName,
      phone: phoneNumber,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: '',
            phoneNumber: '',
            acceptedTerms: false
          });
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    formData.fullName.trim() !== '' && 
    isValidPhone(formData.phoneNumber) && 
    formData.acceptedTerms;

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        {/* שמאל: תמונה */}
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <img
              src={heroImage}
              alt="אוראל מרגוז - מומחית ציפורניים"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* ימין: תוכן */}
        <div className={styles.rightSection}>
          <div className={styles.badge}>
אחרי שליוותה עשרות תלמידות והעבירה מאות טיפולים <br/> שלי מאיר מציגה
          </div>

          <div className={styles.mainContent}>
            <h1 className={styles.title} style={{ fontFamily: 'Assistant, sans-serif' }}>
              הדרך להפוך לעצמאית בתחום הביוטי <br />
            <span className={styles.goldHighlight}>שמכניסה 5 ספרות בחודש</span> ועובדת בזמנים שלה 
            </h1>

            <p className={styles.description} style={{ fontFamily: 'AssistantR, sans-serif' }}>
              <span className={styles.highlightedText}>גם אם אין לך נסיון</span>  <span className={styles.highlightedText}>קורסים אישיים עם ליווי צמוד</span>
            </p>

            {/* תמונה לטלפונים - תוצג רק בטלפון */}
            <div className={styles.mobileImageContainer}>
              <img
                src={heroImage}
                alt="אוראל מרגוז - מומחית ציפורניים"
                className={styles.mobileHeroImage}
              />
            </div>

            <div className={styles.formContainer} id="טופס">
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="מה השם שלך?"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`${styles.formInput} ${errors.fullName ? styles.inputError : ''}`}
                  style={{ fontFamily: 'AssistantR, sans-serif' }}
                  disabled={isSubmitting || submitted}
                />
                {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  placeholder="מה המספר שלך?"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className={`${styles.formInput} ${errors.phoneNumber ? styles.inputError : ''}`}
                  style={{ fontFamily: 'AssistantR, sans-serif' }}
                  disabled={isSubmitting || submitted}
                />
                {errors.phoneNumber && <span className={styles.errorText}>{errors.phoneNumber}</span>}
              </div>

              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.acceptedTerms}
                  onChange={(e) => handleInputChange('acceptedTerms', e.target.checked)}
                  className={styles.checkboxInput}
                  disabled={isSubmitting || submitted}
                />
                <label htmlFor="terms" className={styles.checkboxLabel}>
                  קראתי ואני מאשר/ת את{' '}
                  <a 
                    href="/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#7B0E14', 
                      textDecoration: 'underline',
                      fontWeight: 'bold'
                    }}
                  >
                    תקנון האתר
                  </a>
                </label>
              </div>
             
              <button
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting || submitted}
                style={{ fontFamily: 'Assistant, sans-serif' }}
              >
                {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'שלי, בואי נדבר!'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;