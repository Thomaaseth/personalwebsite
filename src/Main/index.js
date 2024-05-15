import React from "react";
import styles from './main.module.css'
import Presentation from "./Presentation";
import Experiences from "./Experiences";
import Contact from "./Contact";

function Main() {
    return (
        <div className={styles.container}>
           <Presentation />
           <Experiences />
           <Contact />
    </div>
    );
};

export default Main;