import React from 'react'
import styles from './header.module.css'

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth'});
    };

    return(
        <header className={styles.header} style={{ width: '100%', backgroundColor: 'lightblue', padding: '20px 0', textAlign: 'center' }}>
        <button onClick={() => scrollToSection('section1')} style={{ marginRight: '20px' }}>Presentation</button>
        <button onClick={() => scrollToSection('section2')} style={{ marginRight: '20px' }}>Experiences</button>
        <button onClick={() => scrollToSection('section3')}>Contact me</button>
        <div className={styles.headerContent}>
          <p>Thomas Demathieu</p>
        </div>
        <button className={styles.backToTopButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
      </header>
    );
};

export default Header;