import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsWrapper}>
      <div className={styles.firstDiv}>
        <h1>Let&sbquo;s Introduce Ourself</h1>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.secondDiv}>
        <h3>Criminal Lawyer</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}
