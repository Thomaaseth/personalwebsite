import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className={styles.footer}>
          <div>
          <small>&copy; {currentYear} All rights reserved</small>
          
          </div>
      </footer>
    );
}

export default Footer;