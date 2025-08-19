import FloatingButton from "../components/FloatButton/FloatButton"
import GlassCard from "../components/glass/GlassBox"
import Syllabus from "../components/Sillabus/Sillabus"
import styles from "./ForthScreen.module.css"
import learn from "../icons/wired-outline-1871-red-carpet-hover-pinch (1).json"
import personal from "../icons/wired-outline-645-people-handshake-transaction-hover-pinch (2).json"
import kit from "../icons/wired-outline-775-needle-hover-pinch (1).json"
import SixthScreen from "./SixthScreen"
import Button from "../components/button/Button"
const ForthScreen=()=>{
    return <>
    <div className={styles.background}>
<div className={styles.title}>וכולן.. אבל כולן, אבל את אחת מהדרכים הבאות</div>
<div className={styles.description}>לחצי על כל אחד מהקורסים כדי לראות את הסילבוס המלא שלו</div>
<Syllabus/>
{/* <FloatingButton/> */}

<div className={styles.title}>חשוב לי לציין</div>
<div className={styles.description}>כל הקורסים כוללים:</div>
<div className={styles.row}>
<GlassCard icon={learn} title="יום פתוח לתרגול פעם בחודש" description="מרגישה שאת צריכה חיזוק בנקודות ספציפיות אחרי הקורס? בכל חודש יש יום פתוח לכל התלמידות שלי שיוכלו לתרגל יחד איתי ולעבור איתי על כל האתגרים החדשים שיש להן"/>
<GlassCard icon={personal} title="יחס אישי" description="כל תלמידה שלי מקבלת את היחס הכי אישי ממני! הקבוצות מכילות עד 3 בנות בקבוצה כדי שתמיד אוכל לשים את העיניים שלי עלייך, על העבודה שלך ועל ההתקדמות שלך"/>
    <GlassCard 
               icon={kit} 
               title="ערכה מפוארת" 
               description="כל תלמידה מקבלת ערכה מלאה ומפוארת עם כל הכלים המקצועיים שהיא צריכה כדי להתחיל לעבוד מיד אחרי הקורס את לא תצטרכי להשקיע עוד אפילו שקל אחד"
           />
</div>
<Button text="שלי, בואי נדבר!"/>
    </div>
    </>
}
export default ForthScreen