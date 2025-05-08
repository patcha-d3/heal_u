import React from 'react';
import styles from './Button-survey.module.css';


const ButtonSurvey = ({ label, active, onClick }) => (
  <button
    className={`${styles.surveyButton}${active ? ' ' + styles.active : ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default ButtonSurvey;