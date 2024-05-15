import React, { useState } from 'react';
import styles from './jobExp.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const JobExperience = ({ company, position, year, skills, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.jobExperience}>
            <div className={styles.header} onClick={toggleDetails}>
                <h3>{position} at {company} ({year})</h3>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className={styles.skills}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>{skill}</div>
                ))}
            </div>
            {isOpen && (
                <div className={styles.details}>
                    {details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobExperience;
