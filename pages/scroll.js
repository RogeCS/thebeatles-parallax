import React, { useRef, useState, useEffect } from "react";
import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions';
import { motion } from 'framer-motion';
import Image from "next/image";
import ButtonNext from "../components/buttonNext";
import ButtonBack from "../components/buttonBack";


import styles from '../styles/scroll.module.css';

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

  const left2 = {
    offscreen: {
      x: -800,
      opacity: 0
    },
    onscreen: {
      x: 0,
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
        <p className="scroll-text">Scroll</p>
        <div className="white_space" />
        <motion.div 
          className={styles.container}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:false, amount: 0.8}}
          transition={{staggerChildren: 0.5}}
        >
          <motion.div
            className={styles.text_box}
            variants={left}
          >
          </motion.div>
          <div className={styles.bottom}>
            <motion.div 
              className={styles.country_box}
              variants={left2}/>
            <motion.div 
              className={styles.person1_box}
              variants={up}
            />
            <motion.div 
              className={styles.person2_box}
              variants={up}
            />
              
          </div>
        </motion.div>
        <div className="white_space" />
      </div>
      <div className="buttons">
        <ButtonNext to="/scroll2"></ButtonNext>
      </div>
    </div>

  );
}

export default scroll;