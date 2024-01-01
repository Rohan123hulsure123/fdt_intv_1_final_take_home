import React from 'react'
import styles from "./Newsletter.module.css"


export default function Newsletter() {
  return (
    <div className={styles.newsletterWrapper}>
        <h1>Subscribe Our Newsletter</h1>
        <div>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Enter your Email'/>
            <button>SEND</button>
        </div>
    </div>
  )
}
