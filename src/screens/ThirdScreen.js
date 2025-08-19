import styles from "./ThirdScreen.module.css"
import results from "../images/שלי מאיר תוצאות.png"
import Shorts from "../components/shorts/Shorts"
const ThirdScreen=()=>{


    return <>
    <div className={styles.title}>שכבר הפכו את החלום למציאות</div>
    <Shorts/>
     {/* <div className={styles.imageContainer}>
        <img className={styles.image} src={results}/>
     </div> */}
    </>
}
export default ThirdScreen