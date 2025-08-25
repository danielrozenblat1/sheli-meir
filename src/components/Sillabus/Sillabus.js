import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Sparkles,
  Heart,
  Shield,
  AlertCircle,
  FileText,
  Syringe,
  ScanLine,
  Hand,
  Smile,
  PenTool,
  Palette,
  Award,
  Camera,
  Instagram,
  GraduationCap,
  Trophy,
  Plus,
  Minus,
  Scissors,
  Users
} from 'lucide-react';
import styles from './Sillabus.module.css';

const SyllabusDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [browsIsOpen, setBrowsIsOpen] = useState(false);
  const [naturalBrowsIsOpen, setNaturalBrowsIsOpen] = useState(false);

  const lipsData = {
    days: [
      {
        number: "01",
        content: [
          "הכרת התחום מיקרופיגמנטציה שפתיים",
          "מהם היתרונות של השימוש באיפור קבוע שפתיים",
          "שכבות העור בשפתיים ואבחון העור",
          "סוגי הצבעים קרים חמים ומנטרלים",
          "סוגי שפתיים",
          "התאמת הצבעים לגוון העור על פי טבלת פיצפטריק",
          "שרטוט סקיצה נכונה וקו תיחום על פי השיטה של שלי מאיר",
          "הכרת המכשיר החשמלי וסוגי מחטים",
          "תהליך עבודה נכונה למינימום כאב",
          "למי אסור לבצע את הטיפול (מצבים רפואיים)",
          "איסורים בטיפול",
          "תהליך ריפוי",
          "מאלחשים וציוד"
        ]
      },
      {
        number: "02",
        content: [
          "אימונים על לטקסים",
          "תרגול שרטוט סקיצות שפתיים",
          "תרגול קו תיחום וצורות שפתיים שונות",
          "תרגול עם המכשיר החשמלי על לטקס",
          "תרגול ערבוב פיגמנטים וצבעים",
          "תרגול טכניקות מילוי ושיפוע",
          "סימולציה של תהליך הטיפול המלא"
        ]
      },
      {
        number: "03",
        content: [
          "תרגול מעשי ראשון על מודליסטית",
          "הכנת המודליסטית והסברת התהליך",
          "מדידת השפתיים ושרטוט הצורה הנכונה",
          "בחירת גוון הפיגמנט המתאים",
          "ביצוע קו תיחום עליון ותחתון",
          "מילוי ראשוני עדין ושמירה על סימטריה",
          "הנחיות לטיפול לאחר הפרוצדורה"
        ]
      },
      {
        number: "04",
        content: [
          "תרגול מעשי שני על מודליסטית",
          "הערכת התוצאה מהטיפול הקודם",
          "שרטוט מדויק יותר עם טכניקות מתקדמות",
          "עבודה על עומק וצפיפות הפיגמנט",
          "תרגול טכניקת אקוורל ואודם",
          "שיפור סימטריה ותיקון פרטים קטנים",
          "בניית ביטחון ומהירות בעבודה"
        ]
      },
      {
        number: "05",
        content: [
          "תרגול מעשי שלישי על מודליסטית",
          "עבודה עצמאית תחת פיקוח המאסטרית",
          "ביצוע הטיפול המלא מתחילה ועד סוף",
          "טיפול בבעיות ותיקונים בזמן אמת",
          "שיפור טכניקות ופיתוח סגנון אישי",
          "התמודדות עם סוגי שפתיים מורכבים",
          "הכנה לעבודה עצמאית וביטחון מקצועי"
        ]
      },
      {
        number: "06",
        content: [
          "שיעור בונוס! שיווק צילום וצעדים לפתיחת עסק"
        ]
      }
    ]
  };

  const browsData = {
    days: [
      {
        number: "01",
        content: [
          "תאוריה עיונית עיצוב גבות טבעיות + מודליסטית",
          "עקרונות בסיסיים של צורת הגבה צבע ומרקם השיערה",
          "הכרת הטכניקות והשיטות השונות",
      
          "התאמת הצבעים לגוון העור",
          "מדידה ושרטוט בצורה נכונה",
          "הכרת המכשיר הידני וסוגי מחטים",
          "סוגי העור ואיבחון העור",
          "למי אסור לבצע את הטיפול (מצבים רפואיים)",
          "איסורים בטיפול",
          "עיצוב גבות טבעיות בחוט פינצטה מספריים ושעווה"
        ]
      },
      {
        number: "02",
        content: [
          "תאוריה עיונית על שיטת המיקרובליידינג",
     
          "עקרונות בסיסיים של צוית הגבה צבע ומרקם השיערה",
      
          "מדידה ושרטוט בצורה נכונה",
          "הכרת המכשיר הידני וסוגי מחטים",
          "הסבר על שיטת המיקרובליידינג",
       
        ]
      },
      {
        number: "03",
        content: [
          "שיעור לטקסים",
          "תרגול על מכשיר ידני וסוגי מחטים",
          "תרגול מדידה ושרטוט נכון",
          "תרגול שיטת המיקרובליידינג על לטקס",
          "תרגול ערבוב פיגמנטים",
          "סימולציה של תהליך הטיפול המלא"
        ]
      },
      {
        number: "04",
        content: [
          "תרגול מעשי ראשון על מודליסטית",
          "הכנת המודליסטית והסברת התהליך",
          "מדידת הגבות ושרטוט הצורה הנכונה",
          "בחירת גוון הפיגמנט המתאים",
          "ביצוע קווי השיערה הראשונים",
          "עבודה עדינה ושמירה על סימטריה",
          "הנחיות לטיפול לאחר הפרוצדורה"
        ]
      },
      {
        number: "05",
        content: [
          "תרגול מעשי שני על מודליסטית",
          "הערכת התוצאה מהטיפול הקודם",
          "שרטוט מדויק יותר עם טכניקות מתקדמות",
          "עבודה על עומק וצפיפות הפיגמנט",
          "שיפור סימטריה ותיקון פרטים קטנים",
          "בניית ביטחון ומהירות בעבודה",
          "פיתוח סגנון אישי במיקרובליידינג"
        ]
      },
      {
        number: "06",
        content: [
          "שיעור בונוס! שיווק צילום וצעדים לפתיחת עסק",
          "בניית תיק עבודות מקצועי",
          "טיפים לצילום תוצאות הטיפול",
          "אסטרטגיות שיווק ברשתות החברתיות",
          "הקמת עסק עצמאי בתחום האיפור הקבוע"
        ]
      }
    ]
  };

  const naturalBrowsData = {
    days: [
      {
        number: "01",
        content: [
          "שעתיים ראשונות - תאוריה עיונית",
          "עקרונות בסיסיים של צורת הגבה צבע ומרקם השיערה",
          "הכרת הטכניקות והשיטות השונות",
          "שיטות לעיצוב גבות ולמידת גבולות הגבה",
          "מדידה ושרטוט בצורה נכונה",
          "סוגי העור ואיבחון העור",
          "שעה שלישית - שרטוט ומדידה",
          "שעה רביעית - למידת הטכניקה בחוט / פינצטה מספריים ושעווה",
          "שעה חמישית - שיווק ברשתות החברתיות וצילום",
          "שעה שישית - מעשי על מודליסטיות"
        ]
      }
    ]
  };

  const getBrowsIconForContent = (content) => {
    const iconMap = {
      "תאוריה עיונית עיצוב גבות טבעיות + מודליסטית": <FileText color='#722f37' />,
      "עקרונות בסיסיים של צורת הגבה צבע ומרקם השיערה": <Sparkles color='#722f37' />,
      "הכרת הטכניקות והשיטות השונות": <GraduationCap color='#722f37' />,
      "הסבר על שיטת המיקרובליידינג": <ScanLine color='#722f37' />,
      "התאמת הצבעים לגוון העור": <Palette color='#722f37' />,
      "מדידה ושרטוט בצורה נכונה": <PenTool color='#722f37' />,
   
      "סוגי העור ואיבחון העור": <Shield color='#722f37' />,
      "למי אסור לבצע את הטיפול (מצבים רפואיים)": <AlertCircle color='#722f37' />,
      "איסורים בטיפול": <AlertCircle color='#722f37' />,
      "עיצוב גבות טבעיות בחוט פינצטה מספריים ושעווה": <Smile color='#722f37' />,
      "תאוריה עיונית על שיטת המיקרובליידינג": <FileText color='#722f37' />,
      "עקרונות בסיסיים של צוית הגבה צבע ומרקם השיערה": <Sparkles color='#722f37' />,
      "שיעור לטקסים": <Hand color='#722f37' />,
      "תרגול על מכשיר ידני וסוגי מחטים": <ScanLine color='#722f37' />,
      "תרגול מדידה ושרטוט נכון": <PenTool color='#722f37' />,
      "תרגול שיטת המיקרובליידינג על לטקס": <Hand color='#722f37' />,
      "תרגול ערבוב פיגמנטים": <Palette color='#722f37' />,
      "סימולציה של תהליך הטיפול המלא": <Trophy color='#722f37' />,
      "תרגול מעשי ראשון על מודליסטית": <Hand color='#722f37' />,
      "הכנת המודליסטית והסברת התהליך": <FileText color='#722f37' />,
      "מדידת הגבות ושרטוט הצורה הנכונה": <PenTool color='#722f37' />,
      "בחירת גוון הפיגמנט המתאים": <Palette color='#722f37' />,
      "ביצוע קווי השיערה הראשונים": <ScanLine color='#722f37' />,
      "עבודה עדינה ושמירה על סימטריה": <Hand color='#722f37' />,
      "הנחיות לטיפול לאחר הפרוצדורה": <Shield color='#722f37' />,
      "תרגול מעשי שני על מודליסטית": <Hand color='#722f37' />,
      "הערכת התוצאה מהטיפול הקודם": <ScanLine color='#722f37' />,
      "שרטוט מדויק יותר עם טכניקות מתקדמות": <PenTool color='#722f37' />,
      "עבודה על עומק וצפיפות הפיגמנט": <Palette color='#722f37' />,
      "שיפור סימטריה ותיקון פרטים קטנים": <Hand color='#722f37' />,
      "בניית ביטחון ומהירות בעבודה": <Award color='#722f37' />,
      "פיתוח סגנון אישי במיקרובליידינג": <Trophy color='#722f37' />,
      "שיעור בונוס! שיווק צילום וצעדים לפתיחת עסק": <Award color='#722f37' />,
      "בניית תיק עבודות מקצועי": <Camera color='#722f37' />,
      "טיפים לצילום תוצאות הטיפול": <Camera color='#722f37' />,
      "אסטרטגיות שיווק ברשתות החברתיות": <Instagram color='#722f37' />,
      "הקמת עסק עצמאי בתחום האיפור הקבוע": <Trophy color='#722f37' />
    };
  
    return iconMap[content] || <Sparkles color='#722f37' />;
  };

  const getNaturalBrowsIconForContent = (content) => {
    const iconMap = {
      "שעתיים ראשונות - תאוריה עיונית": <FileText color='#722f37' />,
      "עקרונות בסיסיים של צורת הגבה צבע ומרקם השיערה": <Sparkles color='#722f37' />,
      "הכרת הטכניקות והשיטות השונות": <GraduationCap color='#722f37' />,
      "שיטות לעיצוב גבות ולמידת גבולות הגבה": <Smile color='#722f37' />,
      "מדידה ושרטוט בצורה נכונה": <PenTool color='#722f37' />,
      "סוגי העור ואיבחון העור": <Shield color='#722f37' />,
      "שעה שלישית - שרטוט ומדידה": <PenTool color='#722f37' />,
      "שעה רביעית - למידת הטכניקה בחוט / פינצטה מספריים ושעווה": <Scissors color='#722f37' />,
      "שעה חמישית - שיווק ברשתות החברתיות וצילום": <Instagram color='#722f37' />,
      "שעה שישית - מעשי על מודליסטיות": <Users color='#722f37' />
    };
  
    return iconMap[content] || <Sparkles color='#722f37' />;
  };

  const getIconForContent = (content) => {
    const iconMap = {
      "הכרת התחום מיקרופיגמנטציה שפתיים": <Sparkles color='#722f37' />,
      "מהם היתרונות של השימוש באיפור קבוע שפתיים": <Heart color='#722f37' />,
      "שכבות העור בשפתיים ואבחון העור": <Shield color='#722f37' />,
      "סוגי הצבעים קרים חמים ומנטרלים": <Palette color='#722f37' />,
      "סוגי שפתיים": <Smile color='#722f37' />,
      "התאמת הצבעים לגוון העור על פי טבלת פיצפטריק": <Palette color='#722f37' />,
      "שרטוט סקיצה נכונה וקו תיחום על פי השיטה של שלי מאיר": <PenTool color='#722f37' />,
      "הכרת המכשיר החשמלי וסוגי מחטים": <ScanLine color='#722f37' />,
      "תהליך עבודה נכונה למינימום כאב": <Shield color='#722f37' />,
      "למי אסור לבצע את הטיפול (מצבים רפואיים)": <AlertCircle color='#722f37' />,
      "איסורים בטיפול": <AlertCircle color='#722f37' />,
      "תהליך ריפוי": <Heart color='#722f37' />,
      "מאלחשים וציוד": <Syringe color='#722f37' />,
      "אימונים על לטקסים": <Hand color='#722f37' />,
      "תרגול שרטוט סקיצות שפתיים": <PenTool color='#722f37' />,
      "תרגול קו תיחום וצורות שפתיים שונות": <PenTool color='#722f37' />,
      "תרגול עם המכשיר החשמלי על לטקס": <ScanLine color='#722f37' />,
      "תרגול ערבוב פיגמנטים וצבעים": <Palette color='#722f37' />,
      "תרגול טכניקות מילוי ושיפוע": <Palette color='#722f37' />,
      "סימולציה של תהליך הטיפול המלא": <Hand color='#722f37' />,
      "תרגול מעשי ראשון על מודליסטית": <Hand color='#722f37' />,
      "הכנת המודליסטית והסברת התהליך": <FileText color='#722f37' />,
      "מדידת השפתיים ושרטוט הצורה הנכונה": <PenTool color='#722f37' />,
      "בחירת גוון הפיגמנט המתאים": <Palette color='#722f37' />,
      "ביצוע קו תיחום עליון ותחתון": <PenTool color='#722f37' />,
      "מילוי ראשוני עדין ושמירה על סימטריה": <Hand color='#722f37' />,
      "הנחיות לטיפול לאחר הפרוצדורה": <Shield color='#722f37' />,
      "תרגול מעשי שני על מודליסטית": <Hand color='#722f37' />,
      "הערכת התוצאה מהטיפול הקודם": <ScanLine color='#722f37' />,
      "שרטוט מדויק יותר עם טכניקות מתקדמות": <PenTool color='#722f37' />,
      "עבודה על עומק וצפיפות הפיגמנט": <Palette color='#722f37' />,
      "תרגול טכניקת אקוורל ואודם": <Palette color='#722f37' />,
      "שיפור סימטריה ותיקון פרטים קטנים": <Hand color='#722f37' />,
      "בניית ביטחון ומהירות בעבודה": <Award color='#722f37' />,
      "תרגול מעשי שלישי על מודליסטית": <Hand color='#722f37' />,
      "עבודה עצמאית תחת פיקוח המאסטרית": <GraduationCap color='#722f37' />,
      "ביצוע הטיפול המלא מתחילה ועד סוף": <Hand color='#722f37' />,
      "טיפול בבעיות ותיקונים בזמן אמת": <ScanLine color='#722f37' />,
      "שיפור טכניקות ופיתוח סגנון אישי": <Award color='#722f37' />,
      "התמודדות עם סוגי שפתיים מורכבים": <Shield color='#722f37' />,
      "הכנה לעבודה עצמאית וביטחון מקצועי": <Trophy color='#722f37' />,
      "שיעור בונוס! שיווק צילום וצעדים לפתיחת עסק": <Award color='#722f37' />
    };
  
    return iconMap[content] || <Sparkles color='#722f37' />;
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleBrowsDrawer = () => {
    setBrowsIsOpen(!browsIsOpen);
  };

  const toggleNaturalBrowsDrawer = () => {
    setNaturalBrowsIsOpen(!naturalBrowsIsOpen);
  };

  const handleWhatsAppClick = (courseName) => {
    const phoneNumber = "972536216926";
    const message = `מה נשמע שלי? הגעתי מהדף שלך, אשמח לשמוע עוד פרטים על ${courseName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.container} dir="rtl">
      {/* קורס איפור קבוע - שפתיים */}
      <div className={styles.wrapper}>
        <div className={styles.drawerHeader} onClick={toggleDrawer}>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <h2 className={styles.drawerTitle}>קורס איפור קבוע - שפתיים</h2>
              <p className={styles.drawerDescription}>6 מפגשים, כ-3 שעות כל מפגש</p>
            </div>
            <div className={styles.toggleIcon}>
              {isOpen ? <Minus size={24} color="white" /> : <Plus size={24} color="white" />}
            </div>
          </div>
        </div>

        <div className={`${styles.drawerContent} ${isOpen ? styles.open : ''}`}>
          <div className={styles.contentInner}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <Clock color='white' size={20} />
                <span className={styles.infoText}>10:00 - 13:00</span>
              </div>
              <div className={styles.infoCard}>
                <MapPin color='white' size={20} />
                <span className={styles.infoText}>עפולה</span>
              </div>
            </div>

            <div className={styles.daysContainer}>
              {lipsData.days.map(day => (
                <div key={day.number} className={`${styles.dayCard} ${styles['day' + day.number]}`}>
                  <div className={styles.dayHeader}>
                    <h3 className={styles.dayTitle}>יום מספר</h3>
                    <span className={styles.dayNumber}>{day.number}</span>
                  </div>
                  <div className={styles.itemList}>
                    {day.content.map((item, index) => (
                      <div key={index} className={styles.item}>
                        <span className={styles.itemIcon}>
                          {getIconForContent(item)}
                        </span>
                        <span className={styles.itemText}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.actionButtonContainer}>
              <button 
                className={styles.actionButton}
                onClick={() => handleWhatsAppClick('קורס איפור קבוע - שפתיים')}
              >
                לחצי כאן לעוד פרטים
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* קורס מיקרופיגמנטציה - גבות */}
      <div className={styles.wrapper}>
        <div className={styles.drawerHeader} onClick={toggleBrowsDrawer}>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <h2 className={styles.drawerTitle}>קורס מיקרופיגמנטציה - גבות</h2>
              <p className={styles.drawerDescription}>6 מפגשים, כ-3 שעות כל מפגש</p>
            </div>
            <div className={styles.toggleIcon}>
              {browsIsOpen ? <Minus size={24} color="white" /> : <Plus size={24} color="white" />}
            </div>
          </div>
        </div>

        <div className={`${styles.drawerContent} ${browsIsOpen ? styles.open : ''}`}>
          <div className={styles.contentInner}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <Clock color='white' size={20} />
                <span className={styles.infoText}>10:00 - 13:00</span>
              </div>
              <div className={styles.infoCard}>
                <MapPin color='white' size={20} />
                <span className={styles.infoText}>עפולה</span>
              </div>
            </div>

            <div className={styles.daysContainer}>
              {browsData.days.map(day => (
                <div key={day.number} className={`${styles.dayCard} ${styles['day' + day.number]}`}>
                  <div className={styles.dayHeader}>
                    <h3 className={styles.dayTitle}>יום מספר</h3>
                    <span className={styles.dayNumber}>{day.number}</span>
                  </div>
                  <div className={styles.itemList}>
                    {day.content.map((item, index) => (
                      <div key={index} className={styles.item}>
                        <span className={styles.itemIcon}>
                          {getBrowsIconForContent(item)}
                        </span>
                        <span className={styles.itemText}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.actionButtonContainer}>
              <button 
                className={styles.actionButton}
                onClick={() => handleWhatsAppClick('קורס מיקרופיגמנטציה - גבות')}
              >
                לחצי כאן לעוד פרטים
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* קורס עיצוב ושיקום גבות טבעיות */}
      <div className={styles.wrapper}>
        <div className={styles.drawerHeader} onClick={toggleNaturalBrowsDrawer}>
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <h2 className={styles.drawerTitle}>קורס עיצוב ושיקום גבות טבעיות</h2>
              <p className={styles.drawerDescription}>2 מפגשים, 6 שעות</p>
            </div>
            <div className={styles.toggleIcon}>
              {naturalBrowsIsOpen ? <Minus size={24} color="white" /> : <Plus size={24} color="white" />}
            </div>
          </div>
        </div>

        <div className={`${styles.drawerContent} ${naturalBrowsIsOpen ? styles.open : ''}`}>
          <div className={styles.contentInner}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <Clock color='white' size={20} />
             <span className={styles.infoText}>10:00 - 13:00</span>
              </div>
              <div className={styles.infoCard}>
                <MapPin color='white' size={20} />
                <span className={styles.infoText}>עפולה</span>
              </div>
            </div>

            <div className={styles.daysContainer}>
              {naturalBrowsData.days.map(day => (
                <div key={day.number} className={`${styles.dayCard} ${styles['day' + day.number]}`}>
                  <div className={styles.dayHeader}>
                    <h3 className={styles.dayTitle}>מפגש יומי</h3>
                    <span className={styles.dayNumber}>{day.number}</span>
                  </div>
                  <div className={styles.itemList}>
                    {day.content.map((item, index) => (
                      <div key={index} className={styles.item}>
                        <span className={styles.itemIcon}>
                          {getNaturalBrowsIconForContent(item)}
                        </span>
                        <span className={styles.itemText}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.actionButtonContainer}>
              <button 
                className={styles.actionButton}
                onClick={() => handleWhatsAppClick('קורס עיצוב ושיקום גבות טבעיות')}
              >
                לחצי כאן לעוד פרטים
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SyllabusDrawer;