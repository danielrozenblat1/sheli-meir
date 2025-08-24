import EyelashCalculator from "../components/calculate/Calculate"
import BeautyTreatments from "../components/tipulim/Tipulim"
import styles from "./SeventhScreen.module.css"

const SeventhScreen=()=>{


    return <>
    
    <div className={styles.title}>ולצורך המחשה..</div>
<div className={styles.description}>את הולכת להתמקצע בתחומים הכי מתגמלים בתחום הביוטי! תזיני מספר טיפולים חודשיים ותביני לאן ההכנסה שלך בתחום יכולה להגיע!</div>
<EyelashCalculator/>
    </>
}
export default SeventhScreen