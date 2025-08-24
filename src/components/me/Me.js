import React from 'react';
import styles from './Me.module.css';
import sheli from "../../images/שלי מאיר חצי פנים.png";

const Me = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundLayer} />
      
      <div className={styles.content}>
        <div className={styles.grid}>
          
          {/* Text Section */}
          <div className={styles.textSection}>
            <div className={styles.nameSection}>
              <h1 className={styles.name}>נעים מאוד, שלי מאיר</h1>
            </div>

            <div className={styles.quote}>
              <p className={styles.quoteText}>
                ״נכנסתי לתחום עם 0 נסיון, המון חששות ועם חלום אחד ענק - והיום אני עוזרת לאחרות להגשים את שלהן״
              </p>
            </div>

            <div className={styles.story}>
              <div className={styles.storySection}>
                <p className={styles.storyText}>
                  הייתי שוטרת, על הנייר הייתה לי עבודה בטוחה אבל משהו הרגיש לי חסר. קמתי כל בוקר עם תחושה שאני לא ממצה את עצמי וידעתי שאני לא במקום הנכון. תמיד אהבתי את עולם היופי, אבל כל מי שסביבי הזהיר אותי: "אין בזה כסף", "יש יותר מדי תחרות", "זה לא מקצוע אמיתי". הקשבתי להם יותר מדי זמן - עד שהחלטתי להפסיק.
                </p>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.storySection}>
                <p className={styles.storyText}>
                  שמתי את כל הכסף שהיה לי באותה תקופה על קורס שהאמת.. לא באמת נתן לי את המעטפת ואת הכלים שהייתי צריכה. במקום לוותר, בחרתי להשתפר ולמדתי על בשרי מה לא עובד - והפכתי את מה שיכל להגמר ככשלון לקריירה רווחית בתחום.
                </p>
                  <p className={styles.storyText}>
                  משם נולד הרצון להדריך. רציתי לתת לאחרות את מה שאני לא קיבלתי בהתחלה: קורס אמיתי עם תרגול על מודליסטיות, יחס אישי, ערכה מקצועית, וליווי צמוד גם אחרי הסיום. לא להעביר חומר ולשחרר - אלא להוציא אותך רק כשאני יודעת ובטוחה שאת באמת תדעי לעבוד,להצליח ולהתפרנס מהתחום שאת אוהבת.
                </p>

                <strong>   <p className={styles.storyText}>
                  לא כולן מגיעות עם ביטחון, לא כולן יודעות איך להתחיל. אבל כולן מסוגלות להצליח, כשיש להן את מי שמאמין בהן ומלווה אותן יד ביד וזו הסיבה שאני כאן!
                </p></strong>
              </div>

     

          
            </div>
          </div>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <div className={styles.imageFrame}>
                <img src={sheli} alt="שלי מאיר" className={styles.image} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Me;
