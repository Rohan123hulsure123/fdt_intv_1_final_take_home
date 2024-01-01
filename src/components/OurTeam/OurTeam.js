import React from 'react'
import styles from "./OurTeam.module.css"

const Card = ({image, name, cases}) =>{
    return (<div className={styles.nameCards}>
        <img src={image} alt={name}/>
        <div className={styles.nameCardsChildren}>
        <h3>{name}</h3>
        <span>{cases}</span>
        </div>
    </div>
    )
}

export default function OurTeam() {
  return (
    <div className={styles.ourTeamWrapper}>
        <h1>Our Team</h1>
        <div className={styles.cardsWrapper}>
            <Card image={"/Ellipse 15.png"} name={"Danial Def"} cases={"301 Cases"}/>
            <Card image={"/Ellipse 16.png"} name={"Sanfole"} cases={"850 Cases"}/>
            <Card image={"/Ellipse 15 (1).png"} name={"Cesforila"} cases={"470 Cases"}/>
            <Card image={"/Ellipse 15 (2).png"} name={"Colleen"} cases={"180 Cases"}/>
            <Card image={"/Ellipse 15 (3).png"} name={"Haldone"} cases={"212 Cases"}/>
            <Card image={"/Ellipse 15 (4).png"} name={"Nik Jeo"} cases={"350 Cases"}/>
        </div>
    </div>
  )
}
