import React, { useRef, useEffect } from 'react';
import { Player } from '@lordicon/react';
import styles from './GlassBox.module.css';

const GlassCard = ({ icon, title, description }) => {
  const playerRef1 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Player 
          icon={icon} 
          ref={playerRef1} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
      
      <h3 className={styles.title}>
        {title}
      </h3>
      
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};

export default GlassCard;