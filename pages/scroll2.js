import React, { useRef, useState, useEffect } from "react";
import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions';
import { motion } from 'framer-motion';
import Image from "next/image";
import ButtonBack from "../components/buttonBack";


import styles from '../styles/scroll2.module.css';

const scroll = () => {
  const left = {
    offscreen: {
      x: -800,
      opacity: 0
    },
    onscreen: {
      x: 80,
      opacity: 1
    },
    transition: {
      duration: 3,
    }
  }

  const down = {
    offscreen: {
      y: -800,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 3,
    }
  }

  const up = {
    offscreen: {
      y: 800,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 3,
    }
  }

  return (
    <div>
      <div className={styles.background}>

      </div>
      <div className="grid_container">
        <div className="white_space" />
        <motion.div 
          className={styles.container}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:false, amount: 0.8}}
          transition={{staggerChildren: 0.5}}
        >
          <div className={styles.left}>
            <motion.div
              className={styles.text_box}
              variants={down}
            >
            </motion.div>
          </div>
          <div className={styles.right}>
            <motion.div 
              className={styles.person1_box}
              variants={up}
            />
          </div>
        </motion.div>
        <div className="white_space" />
        <div className="buttons">
          <ButtonBack to="/scroll"></ButtonBack>
        </div>
      </div>
    </div>

  );
}

export default scroll;