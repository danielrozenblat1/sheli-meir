import React, { useState } from 'react';
import { Clock, User, ChevronDown, ChevronUp, MessageCircle, Sparkles, Eye } from 'lucide-react';
import styles from './Tipulim.module.css';
import sfataim from "../../images/שלי תמונה שפתיים.png"
import gabot from "../../images/שלי תמונה גבות.png"
import gabot1 from "../../images/שלי מאיר טיפולי גבות שלה 1.png"
import gabot2 from "../../images/שלי מאיר טיפולי גבות שלה 2.png"
import gabot3 from "../../images/שלי מאיר טיפולי גבות שלה 3.png"
import gabot4 from "../../images/שלי מאיר טיפולי גבות שלה 4.png"
import gabot5 from "../../images/שלי מאיר טיפולי גבות שלה 5.png"
import sfataim1 from "../../images/שלי מאיר טיפולי שפתיים שלה 1.png"
import sfataim2 from "../../images/שלי מאיר טיפולי שפתיים שלה 2.png"
import sfataim3 from "../../images/שלי מאיר טיפולי שפתיים שלה 3.png"
import sfataim4 from "../../images/שלי מאיר טיפולי שפתיים שלה 4.png"
import sfataim5 from "../../images/שלי מאיר טיפולי שפתיים שלה 5.png"
const BeautyTreatments = () => {
  const treatments = [
    {
      id: 1,
      title: 'מיקרובליידינג',
      description: 'טכניקת איפור קבוע מתקדמת ליצירת גבות טבעיות ומושלמות שנראות כמו שיער טבעי',
      image: gabot,
      suitableFor: 'נשים עם גבות דלילות או חסרות סימטריה, נשים שרוצות למלא חללים וחסרויות בגבות, נשים שמחפשות מראה טבעי ומושלם לאורך זמן, נשים פעילות שרוצות לחסוך זמן באיפור יומי',
      duration: '2.5-3 שעות כולל ייעוץ מקדים והתאמה אישית',
      process: 'ייעוץ מקדים וחתימה על טופס הסכמה ← עיצוב גבות אישי ובחירת צבע מתאים ← הרדמה מקומית והכנת האזור ← יצירת קווי שיער דקים באמצעות להב סטרילי ← מריחת פיגמנט איכותי במספר שכבות ← סיום ומתן הוראות טיפוח מפורטות',
      results: 'גבות טבעיות ומדויקות הנראות כמו שיער אמיתי, חיסכון משמעותי בזמן איפור יומי, מראה מושלם ויפה 24/7, עמידות של 1-3 שנים, שיפור בסימטריה ובמבנה הפנים',
      beforeAfterImages: [
     
        gabot2,
       gabot3,
       gabot4,
          gabot5,
      ]
    },
    {
      id: 2,
      title: 'פיגמנט שפתיים',
      description: 'איפור קבוע לשפתיים המעניק צבע עמוק, טבעי ומלא לאורך זמן רב',
      image:sfataim,
      suitableFor: 'נשים עם שפתיים חיוורות או חסרות צבע טבעי, נשים עם שפתיים אסימטריות או חסרות הגדרה, נשים שרוצות מראה טבעי ומלא ללא איפור יומי, נשים פעילות שמחפשות פתרון קבוע ויפה',
      duration: '2-2.5 שעות כולל ייעוץ אישי והתאמת צבע',
      process: 'ייעוץ אישי ובחירת גוון מושלם המתאים לגוון העור ← הכנת השפתיים והרדמה מקומית ← מתיחת קווי מתאר מדויקים ← מילוי צבע בטכניקה מקצועית ← יישום שכבות נוספות לעומק צבע ← סיום ומתן הוראות טיפוח מפורטות',
      results: 'שפתיים בעלות צבע עמוק, טבעי ויפה לאורך זמן, הגדרה מושלמת ומראה מלא, חיסכון משמעותי באיפור שפתיים יומי, עמידות של 2-4 שנים, שיפור בפרופורציות הפנים',
      beforeAfterImages: [
        sfataim1,
      sfataim2,
      sfataim3,
  
      sfataim5,
      ]
    }
  ];

  const handleWhatsAppClick = (treatmentName, event) => {
    event.stopPropagation();
    const message = encodeURIComponent(`היי שלי הגעתי מהדף, אשמח לשמוע על ${treatmentName}`);
    const phoneNumber = '972536216926';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.grid}>
          {treatments.map((treatment) => (
            <TreatmentCard 
              key={treatment.id} 
              treatment={treatment} 
              handleWhatsAppClick={handleWhatsAppClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TreatmentCard = ({ treatment, handleWhatsAppClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={styles.treatmentCard}
      onClick={() => toggleExpanded()}
    >
      {/* Header */}
      <div className={styles.cardHeader}>
        <img
          src={treatment.image}
          alt={treatment.title}
          className={styles.cardImage}
        />
        <div className={styles.imageOverlay}></div>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>
            {treatment.title}
          </h2>
          <p className={styles.cardDescription}>
            {treatment.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardBody}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleExpanded();
          }}
          className={styles.expandButton}
        >
          <span className={styles.expandButtonText}>
            פרטים נוספים
          </span>
          {isExpanded ? (
            <ChevronUp className={styles.chevronIcon} />
          ) : (
            <ChevronDown className={styles.chevronIcon} />
          )}
        </button>

        {/* Expanded Content */}
        <div className={`${styles.expandedContent} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}>
          <div className={styles.expandedInner}>
            {/* למי מתאים */}
            <div className={styles.detailSection}>
              <User className={styles.sectionIcon} />
              <div className={styles.sectionContent}>
                <h3 className={styles.sectionTitle}>למי מתאים הטיפול</h3>
                <p className={styles.sectionText}>
                  {treatment.suitableFor}
                </p>
              </div>
            </div>

            {/* זמן טיפול */}
            <div className={styles.detailSection}>
              <Clock className={styles.sectionIcon} />
              <div className={styles.sectionContent}>
                <h3 className={styles.sectionTitle}>זמן הטיפול</h3>
                <p className={styles.sectionText}>
                  {treatment.duration}
                </p>
              </div>
            </div>

            {/* הליך הטיפול */}
            <div className={styles.detailSection}>
              <Sparkles className={styles.sectionIcon} />
              <div className={styles.sectionContent}>
                <h3 className={styles.sectionTitle}>הליך הטיפול</h3>
                <p className={styles.sectionText}>
                  {treatment.process}
                </p>
              </div>
            </div>

            {/* תוצאות */}
            <div className={styles.detailSection}>
              <Eye className={styles.sectionIcon} />
              <div className={styles.sectionContent}>
                <h3 className={styles.sectionTitle}>תוצאות הטיפול</h3>
                <p className={styles.sectionText}>
                  {treatment.results}
                </p>
              </div>
            </div>

            {/* גלריית תמונות */}
            <div className={styles.gallerySection}>
              <h3 className={styles.galleryTitle}>תוצאות לפני ואחרי</h3>
              <div className={styles.imageGrid}>
                {treatment.beforeAfterImages.map((image, index) => (
                  <div key={index} className={styles.galleryImageContainer}>
                    <img
                      src={image}
                      alt={`תוצאה ${index + 1}`}
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* כפתור וואטסאפ */}
            <button
              onClick={(e) => handleWhatsAppClick(treatment.title, e)}
              className={styles.whatsappButton}
            >
              <MessageCircle className={styles.whatsappIcon} />
              <span>לפרטים ישירות ממני על הטיפול</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyTreatments;