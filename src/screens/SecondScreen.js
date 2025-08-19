import SmallBox from "../components/SmallBox/SmallBox"
import styles from "./SecondScreen.module.css"
import learn from "../icons/wired-lineal-1582-aroma-spa-hover-pinch.json"
const SecondScreen=()=>{

    return <>
    <div className={styles.title} id="קורסים">את כאן מסיבה אחת</div>
        <div className={styles.description}>תמיד אהבת את תחום היופי ולאחרונה את חושבת לקחת את התשוקה שלך צעד אחד קדימה</div>
            <div className={styles.title}>ולהתחיל..</div>
        <div className={styles.row}>
<SmallBox text="לקום בבוקר בתחושה שאת עושה את מה שאת אוהבת" number="01"/>
<SmallBox text="להרוויח בחודש סכומים שגם בהייטק לא מרוויחים" number="02"/>
        </div>
            <div className={styles.row}>
            <SmallBox text="להחליט מתי את עובדת וכמה זמן כי את הופכת לבוסית של עצמך" number="03"/>
<SmallBox text="להבין שהחיים שלך יכולים להשתנות מקצה לקצה במרחק החלטה אחת" number="04"/>
        </div>
                    <div className={styles.description}>ושנייה לפני שנדבר על הדרך לשם..</div>
         {/* <div className={styles.description}>והאמת..? אני מבינה אותך! לפני עשור הייתי באותה צומת דרכים שאת נמצאת בה</div> */}
    </>
}
export default SecondScreen