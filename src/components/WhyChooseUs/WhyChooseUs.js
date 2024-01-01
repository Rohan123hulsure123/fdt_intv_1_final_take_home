import React from "react";
import styles from "./WhyChooseUs.module.css";
// import img  from "../../assets/gift.png";

const Card = ({ title, description, link, style }) => {
  return (
    <div className={styles.card} style={style}>
      <img src={"/gift.png"} alt="gift" />
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Read More</button>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <div className={styles.whyChooseUsWrapper}>
      <h1>Why Choose us?</h1>
      <div className={styles.cardsWrapper}>
        
        <Card
          title={"98% Success Rate"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
          link={""}
        />
        <Card
          title={"100% Success Rate"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
          link={""}
        />
        <Card
          title={"100% Success Rate"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
          link={""}
        />
      </div>
    </div>
  );
}
