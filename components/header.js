import React from 'react'
import Link from 'next/link';
import styles from "../styles/header.module.css"
import { HiMenu } from 'react-icons/hi' 


const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <h1>Inicio</h1>
    </Link>
  </header>
)

export default Header