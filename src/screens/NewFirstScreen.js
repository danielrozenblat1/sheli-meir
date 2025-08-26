import React, { useState, useEffect } from 'react';


import styles from './NewFirstScreen.module.css';
import PinkScrollButton from '../components/ScrollButton/Button';
import learn from "../icons/wired-outline-406-study-graduation-hover-pinch (2).json"
import treatment from "../icons/wired-outline-1582-aroma-spa-hover-pinch.json"
import middleImage from "../images/שלי מאיר תדמית ראשית.png";
import rightImage from "../images/שלי מאיר תדמית ימנית.png"
import leftImage from "../images/שלי מאיר תדמית שמאלית.png"
import GradientLoader from '../components/loader/Loader';
import Loader from '../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,

    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>SHELI MEIR</h1>
  
        <div className={styles.buttonContainer}>
        <PinkScrollButton text="אני רוצה ללמוד את התחום" icon={learn} to="קורסים"/>
        <PinkScrollButton text="אני רוצה לקבוע טיפול" icon={treatment} to="טיפולים"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;