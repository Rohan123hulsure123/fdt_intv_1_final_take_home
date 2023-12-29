import React from 'react'
import {ReactComponent as NavLogo} from '../../assets/logo.svg';
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}> 
         <NavLogo />
         <div>
            <a href='#home' className={styles.navMenus}>Home</a>
            <a href='#home' className={styles.navMenus}>Attorneys</a>
            <a href='#home' className={styles.navMenus}>Practice Areas</a>
            <a href='#home' className={styles.navMenus}>About Us</a>
         </div>
         <button className={styles.callToAction}>Contact Now</button>
        </nav>
  )
}
