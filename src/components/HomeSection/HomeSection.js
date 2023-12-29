import React from "react";

import styles from "./HomeSection.module.css";
import Navbar from "../Navbar/Navbar";
import { ReactComponent as Banner } from "../../assets/banner1.svg";
import { ReactComponent as MessageIcon } from "../../assets/MessageIcon.svg";

export default function HomeSection() {
  return (
    <div className={styles.homeSection}>
      {/* Navbar */}
      <Navbar />
      <div className={styles.heroSection}>
        <div className={styles.headinText}>
          <h1>You don’t have to <span>Fight them Alone.</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className={styles.getEmail}>
            <MessageIcon className={styles.messageIcon}/>
            <input placeholder="Enter your eamil address"/>
            <button>
                Let's Talk
            </button>
          </div>
        </div>
        <Banner />
      </div>

      {/* image and heading */}
    </div>
  );
}
