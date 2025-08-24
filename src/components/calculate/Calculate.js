import React, { useState } from 'react';
import styles from './Calculate.module.css';

const EyelashCalculator = () => {
 const [treatments, setTreatments] = useState('');
 const [incomeRange, setIncomeRange] = useState(null);
 const [error, setError] = useState('');

 const handleInputChange = (e) => {
   const value = e.target.value;
   // רק מספרים שלמים
   if (value === '' || /^\d+$/.test(value)) {
     setTreatments(value);
     setError('');
   }
 };

 const calculateIncome = () => {
   const treatmentsNum = parseInt(treatments, 10);
   
   // בדיקת ולידציה למספר בין 1-100
   if (!treatmentsNum) {
     setError('נא להזין מספר');
     setIncomeRange(null);
     return;
   }
   
   if (treatmentsNum < 1 || treatmentsNum > 100) {
     setError('נא להזין מספר בין 1 ל-100');
     setIncomeRange(null);
     return;
   }

   // חישוב ההכנסה בטווח
   const minIncome = treatmentsNum * 1500;
   const maxIncome = treatmentsNum * 2000;
   
   setIncomeRange({ min: minIncome, max: maxIncome });
   setError('');
 };

 return <>
 

      
   <div className={styles.container}>
     

     <h2 className={styles.subtitle}>הכניסי את מספר הטיפולים (בין 1-100)</h2>
     
     <div className={styles.inputContainer}>
       <input
         type="text"
         value={treatments}
         onChange={handleInputChange}
         className={styles.input}
         placeholder="הזיני מספר בין 1 ל-100"
       />
       {error && <p className={styles.error}>{error}</p>}
     </div>
     
     <button 
       onClick={calculateIncome} 
       className={styles.button}
     >
      כמה זה יוצא בחודש?
     </button>
     
     {incomeRange !== null && (
       <div className={styles.result}>
         ההכנסה הפוטנציאלית שלך היא בין {incomeRange.min.toLocaleString()} ₪ ל-{incomeRange.max.toLocaleString()} ₪
       </div>
     )}
   </div>
   </>
};

export default EyelashCalculator;