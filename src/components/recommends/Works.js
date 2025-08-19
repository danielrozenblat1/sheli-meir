import React from 'react';
import styles from './Recommends.module.css';

// Import your images
import result1 from "../../images/שלי מאיר המלצות 1.png";
import result2 from "../../images/שלי מאיר המלצות 2.png";
import result3 from "../../images/שלי מאיר המלצות 3.png";
import result4 from "../../images/שלי מאיר המלצות 4.png";
import result5 from "../../images/שלי מאיר המלצות 5.png";
import result6 from "../../images/שלי מאיר המלצות 6.png";
import result7 from "../../images/שלי מאיר המלצות 7.png";
import result8 from "../../images/שלי מאיר המלצות 8.png";
import result9 from "../../images/שלי מאיר המלצות 9.png";
import FloatingButton from '../FloatButton/FloatButton';

const Recommends = () => {
  const images = [
    result1, result2, result3, 
    result4, result5,result6,result7,result8,result9,
  ];

  return (
    <>
      {/* הוספת data-component לזיהוי הקומפוננטה */}
      <div className={styles.title} data-component="recommends">
        תשמעי מאלו שכבר עשו את הצעד:
      </div>

      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    
    </>
  );
};

export default Recommends;