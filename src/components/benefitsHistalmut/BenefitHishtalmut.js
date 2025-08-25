import React from 'react';
import needle from "../../icons/wired-lineal-633-female-standing-morph-success.json"
import technic from "../../icons/wired-lineal-39-cog-hover-mechanic.json"
import dream from "../../icons/wired-lineal-458-goal-target-hover-hit (1).json"
import shake from "../../icons/wired-lineal-2082-bribery-hover-pinch.json"
import work from "../../icons/wired-lineal-187-suitcase-morph-open (7).json"
import styles from './BenefitHishtalmut.module.css';
import ScrollReveal from 'scrollreveal';
import { useEffect,useRef } from 'react';
import {Player} from "@lordicon/react"

const VerticalIconCard = ({ text, icon }) => {

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef1 = useRef(null);
  
  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);
  
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.text}`, {
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);
  
  return (
    <div className={styles.card}>
       <div className={styles.icon}>
        <Player 
          icon={icon} 
          ref={playerRef1} 
          size="100%" 
          onComplete={handleComplete}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

// יתרונות השתלמות המיקרובליידינג של רחלי מנקודת מבט התלמידה
const BenefitsContainer = () => {

  const benefits = [

    {
      icon: technic,
      text: "משפרת את הטכניקה שלך ומגיעה לכל טיפול עם בטחון ורוגע"
    },
   
    {
      icon: shake,
      text: "עוסקת בתחום באופן מלא ומתפרנסת מהתשוקה שלך יום יום"
    },
        {
      icon: needle,
      text: "מתגברת על החששות שהרחיקו אותך מהתחום עד היום"
    },
     {
      icon: work,
      text:"משאירה את האכזבות מהקורסים הקודמים מאחור ויוצרת התחלה בטוחה בתחום"
    },

   
  ];

  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <VerticalIconCard 
          key={index} 
          text={benefit.text} 
          icon={benefit.icon}
        />
      ))}
    </div>
  );
};

export default VerticalIconCard;
export { BenefitsContainer };