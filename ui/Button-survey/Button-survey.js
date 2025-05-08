import React from 'react';
import './Button-survey.css';

const ButtonSurvey = ({ label, active, onClick }) => (
    <button 
        className={`surveyButton${active ? ' active' : ''}`} 
        onClick={onClick}
    >
        {label}
    </button>
);

export default ButtonSurvey;