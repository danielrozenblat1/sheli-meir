// Loader.jsx
import React from 'react';
import styles from './Loader.module.css';
import { LottieReact as Lottie } from '@lottielab/lottie-player';

const Loader = () => {
  return (
    <div className={styles.loadingContainer}> 
      <div className={styles.title}>
        {"LOADING...".split('').map((char, index) => (
          <span 
            key={index} 
            className={styles.letter}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className={styles.imageContainer}>
        {/* <Lottie 
          src="https://cdn.lottielab.com/l/Aobkc4vn8S2ZSh.json"
          autoplay 
          className={styles.image}
          style={{
            width: '40%',
            margin: "2% auto",
            height: 'auto',
          }}
        /> */}
      </div>
    </div>  
  );
}

export default Loader;
