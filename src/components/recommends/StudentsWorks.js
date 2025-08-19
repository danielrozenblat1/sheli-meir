import React from 'react';
import styles from './Recommends.module.css';

// Import your images
import result1 from "../../images/שלי מאיר עבודות של תלמידות 1.png";
import result2 from "../../images/שלי מאיר עבודות של תלמידות 2.png";
import result3 from "../../images/שלי מאיר עבודות של תלמידות 3.png";
import result4 from "../../images/שלי מאיר עבודות של תלמידות 4.png";
import result5 from "../../images/שלי מאיר עבודות של תלמידות 5.png";
import result6 from "../../images/שלי מאיר עבודות של תלמידות 6.png";
import result7 from "../../images/שלי מאיר עבודות של תלמידות 7.png";
import result8 from "../../images/שלי מאיר עבודות של תלמידות 8.png";
import result9 from "../../images/שלי מאיר עבודות של תלמידות 9.png";


const StudentsWorks = () => {
  const images = [
    result1, result2, result3, 
    result4, result5,    result6, result7, result8, 
    result9,
  ];

  return (
    <>
      {/* הוספת data-component לזיהוי הקומפוננטה */}
      <div className={styles.title} data-component="StudentsWorks">
    והוציאו עבודות כאלה בשנייה שהן סיימו את הקורס:
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

export default StudentsWorks;