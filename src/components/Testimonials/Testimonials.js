import React from "react";
import styles from "./Testimonials.module.css";

const Card = ({ name, description, image, subtitle, style }) => {
  return (
    <div className={styles.card} style={style}>
      <img src={image} alt="gift" />
      <h1>{name}</h1>
      <span>{subtitle}</span>
      <p>{description}</p>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className={styles.testimonialsWrapper}>
      <div className={styles.testimonialsHeader}>
        <h1>What says our <br/> happy Clients</h1>
        <div className={styles.sliderButtonsWrapper}>
            <div className={styles.sliderButton1}>
                <img src={"./Down 1.png"} alt="Left arrow"/>
            </div>
            <div className={styles.sliderButton2}>
                <img src={"./Down 2.png"} alt="Right arrow"/>
            </div>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        <Card
          name={"Jane Cooper"}
          subtitle={"Ceo of Hunt"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
          }
          image={"/Ellipse 14.png"}
        />
        <Card
          name={"Devon Lane"}
          subtitle={"Ceo of Hunt"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
          }
          image={"/Ellipse 14 (1).png"}
        />
        <Card
          name={"Robert Fox"}
          subtitle={"Ceo of Hunt"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
          }
          image={"/Ellipse 14 (2).png"}
        />
      </div>
    </div>
  );
}
