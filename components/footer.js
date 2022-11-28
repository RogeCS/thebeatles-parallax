import React from 'react'
import styles from "../styles/footer.module.css"
import { HiMenu } from 'react-icons/hi' 


const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.year}>2022</p>
    <p className={styles.title}>¡Vive la Beatlemanía!</p>
    <p className={styles.authors}>Valeria HP - Regina MA - Rogelio ML</p>
  </footer>
)

export default Footer;