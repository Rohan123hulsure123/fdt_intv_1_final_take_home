import React from 'react'
import styles from "./Footer.module.css"
import {ReactComponent as NavLogo} from '../../assets/logo.svg';


export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.navbar}> 
         <NavLogo />
         <div>
            <a href='#home' className={styles.navMenus}>Home</a>
            <a href='#home' className={styles.navMenus}>Attorneys</a>
            <a href='#home' className={styles.navMenus}>Practice Areas</a>
            <a href='#home' className={styles.navMenus}>About Us</a>
         </div>
         <div className={styles.callToAction}>
            <img src={"./Icon (3).png"} alt='Instagram'/>
            <img src={"./Icon (2).png"} alt='Instagram'/>
            <img src={"./Icon (1).png"} alt='Instagram'/>
            <img src={"./Icon.png"} alt='Instagram'/>
         </div>
        </div>
        <div className={styles.footerEnd}>
            <span>© 2023 Rohan Hulsure. All right reserved.</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
        </div>
    </div>
  )
}
