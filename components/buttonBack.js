import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import styles from "../styles/buttonNext.module.css"
import { BsArrowLeftShort } from 'react-icons/bs' 


const ButtonBack = ({to="/"}) => (
  <Link href={to}>
    <motion.button
      className={styles.btn_next}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 17 }}
    >
      <BsArrowLeftShort size={40} />
    </motion.button>
  </Link>
)

export default ButtonBack;