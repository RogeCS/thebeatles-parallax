import React from 'react'
import styles from "../styles/header.module.css"
import { HiMenu } from 'react-icons/hi' 


const Header = () => (
  <header className={styles.header}>
    <HiMenu size={60} />
  </header>
)

export default Header