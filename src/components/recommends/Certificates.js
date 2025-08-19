import React, { useEffect } from 'react';
import styles from './Certificates.module.css';
import ScrollReveal from 'scrollreveal';

// Import all images from 1 to 44
import work1 from "../../images/שלי מאיר תלמידות 1.png";
import work2 from "../../images/שלי מאיר תלמידות 2.png";
import work3 from "../../images/שלי מאיר תלמידות 3.png";
import work4 from "../../images/שלי מאיר תלמידות 4.png";
import work5 from "../../images/שלי מאיר תלמידות 5.png";
import work6 from "../../images/שלי מאיר תלמידות 6.png";
import work7 from "../../images/שלי מאיר תלמידות 7.png";
import work8 from "../../images/שלי מאיר תלמידות 8.png";
import work9 from "../../images/שלי מאיר תלמידות 9.png";
import work10 from "../../images/שלי מאיר תלמידות 10.png";
import work11 from "../../images/שלי מאיר תלמידות 11.png";
import work12 from "../../images/שלי מאיר תלמידות 12.png";
import work13 from "../../images/שלי מאיר תלמידות 13.png";
import work14 from "../../images/שלי מאיר תלמידות 14.png";
import work15 from "../../images/שלי מאיר תלמידות 15.png";
import work16 from "../../images/שלי מאיר תלמידות 16.png";
import work17 from "../../images/שלי מאיר תלמידות 17.png";
import work18 from "../../images/שלי מאיר תלמידות 18.png";
import work19 from "../../images/שלי מאיר תלמידות 19.png";
import work20 from "../../images/שלי מאיר תלמידות 20.png";
import work21 from "../../images/שלי מאיר תלמידות 21.png";
import work22 from "../../images/שלי מאיר תלמידות 22.png";
import work23 from "../../images/שלי מאיר תלמידות 23.png";
import work24 from "../../images/שלי מאיר תלמידות 24.png";
import work25 from "../../images/שלי מאיר תלמידות 25.png";


// Import background image - replace with your actual background image path
import backgroundImage from "../../images/שלי מאיר תמונה תדמיתית.png"; // החלף בנתיב התמונה שלך

const Certificates = () => {
  // חלוקת התמונות לשני מערכים של 22 תמונות כל אחד
  const firstCarouselImages = [
    work1, work2, work3, work4, work5, work6, work7, work8, work9, work10,
    work11, work12, 
  ];

  const secondCarouselImages = [
work13, work14, work15, work16, work17, work18, work19, work20,
    work21, work22,  work23, work24, work25,
  ];

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.main-image-reveal', {
      distance: '100px',
      origin: 'bottom',
      duration: 1200,
      delay: 200,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      reset: false
    });

    // Reveal title with a slight delay
    ScrollReveal().reveal('.title-reveal', {
      distance: '50px',
      origin: 'top',
      duration: 1000,
      delay: 100,
      easing: 'ease-out',
      opacity: 0,
      reset: false
    });

    // Reveal carousels with stagger
    ScrollReveal().reveal('.carousel-reveal', {
      distance: '80px',
      origin: 'left',
      duration: 1000,
      delay: 400,
      easing: 'ease-out',
      opacity: 0,
      reset: false,
      interval: 200
    });

    // Cleanup function
    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  return (
    <>
      <div className={`${styles.title} title-reveal`}>בשנים האחרונות הדרכתי עשרות נשים</div>
      
      <div className={styles.mainContainer}>
        {/* התמונה הרגילה */}
        <div className={`${styles.imageContainer} main-image-reveal`}>
          <img
            src={backgroundImage}
            alt="רחלי"
            className={styles.mainImage}
          />
        </div>
        
        {/* הקרוסלה הראשונה (למטה) */}
        <div className={`${styles.carouselContainer} carousel-reveal`}>
          <div className={styles.scrollTrack}>
            {/* קבוצה ראשונה של תמונות */}
            <div className={styles.scrollContainer}>
              {firstCarouselImages.map((img, index) => (
                <div key={`first-${index}`} className={styles.imageWrapper}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 1}`}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
            {/* קבוצה שנייה זהה של תמונות */}
            <div className={styles.scrollContainer}>
              {firstCarouselImages.map((img, index) => (
                <div key={`first-second-${index}`} className={styles.imageWrapper}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 1}`}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* הקרוסלה השנייה (למעלה) */}
        <div className={`${styles.carouselContainer2} carousel-reveal`}>
          <div className={styles.scrollTrack2}>
            {/* קבוצה ראשונה של תמונות */}
            <div className={styles.scrollContainer}>
              {secondCarouselImages.map((img, index) => (
                <div key={`second-${index}`} className={styles.imageWrapper2}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 23}`}
                    className={styles.image2}
                  />
                </div>
              ))}
            </div>
            {/* קבוצה שנייה זהה של תמונות */}
            <div className={styles.scrollContainer}>
              {secondCarouselImages.map((img, index) => (
                <div key={`second-second-${index}`} className={styles.imageWrapper2}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 23}`}
                    className={styles.image2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;