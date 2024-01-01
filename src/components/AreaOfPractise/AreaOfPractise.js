import React from "react";
import styles from "./AreaOfPractise.module.css";

export default function AreaOfPractise() {
  return (
    <div className={styles.areaOfPractiseWrapper}>
      <h1>Area of Practices</h1>
      <div>
        <div className={styles.firstRow}>
          <div className={styles.card}><img src={"/Rectangle 3652.png"} alt=""/><span>BUSINESS LAW</span></div>
          <div className={styles.card}><img src={"Rectangle 3651.png"} alt=""/><span>PARTNERSHIP LAW</span></div>
        </div>
        <div className={styles.secondRow}>
        <div className={styles.card}><img src={"Rectangle 3653.png"} alt=""/> <span>&nbsp;REAL ESTATE LAW</span></div>
        <div className={styles.card}><img src={"Rectangle 3654.png"} alt=""/><span>BUSINESS LAW</span></div>
        </div>
        <div className={styles.thirdRow}>
        <div className={styles.card}><img src={"Rectangle 3656.png"} alt=""/><span>LANDLORD DISPUTES</span></div>
        <div className={styles.card}><img src={"Rectangle 3655.png"} alt=""/><span>ELDER ABUSE</span></div>
        </div>
      </div>
    </div>
  );
}
