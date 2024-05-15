import React from 'react';
import styles from './experience.module.css';
import JobExperience from './JobExperience/jobExp';

const Experiences = () => {

    const jobExperience = [
        {
        company: 'GOSHABA',
        postion: 'Chef de projet',
        year: '2020-2022',
        time: '2 years 8 months',
        skills: ['Gestion de projet', 'Relation client', 'skill 3'],
        details: [
            'Mise en place et déploiement de parcours de recrutement basés sur des jeuxcognitifs',
            `Onboarding et gestion d'un portefeuille de plus de 30 clients, dont plus de lamoitié clients grands comptes`,
            `Gestion de la relation client, accompagnement à toutes les étapes dans l’utilisation de la solution et le déploiement`,
            'Suivi des KPIs',
            'Animation des ateliers clients',
            `Réduction significative du churn par l’amélioration de la satisfaction client`
        ]
        },
        {
            company: 'Company B',
            postion: 'title post',
            year: '2000-2000',
            skills: ['skill 1', 'skill 2', 'skill 3'],
            details: [
                'Lorem',
                'ipsum',
                'dolor'
            ]
            },
            {
                company: 'Company C',
                postion: 'title post',
                year: '2000-2000',
                skills: ['skill 1', 'skill 2', 'skill 3'],
                details: [
                    'Lorem',
                    'ipsum',
                    'dolor'
                ]
            },
    ];
    return (
        <div className={styles.section} id="section2">
            <h2>Experiences</h2>
            {jobExperience.map((job, index) => (
                <JobExperience
                    key={index}
                    company={job.company}
                    position={job.position}
                    year={job.year}
                    time={job.time}
                    skills={job.skills}
                    details={job.details}
                />
            ))}
        </div>
    );
};

export default Experiences;