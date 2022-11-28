import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'
import {Animated} from "react-animated-css";
import { motion } from 'framer-motion';
import styles from '../styles/home.module.css';

const index = () => {

  const appear = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Beatlemanía</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="h-screen"
        style={{
          backgroundImage: "url('/Fondo1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: '100vw'
        }} 
      >
        <div className={`grid_container ${styles.section}`}>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className={styles.img_intro}
          >
            <Image src='/Intro_texto.png' width="800px" height="600px" />
          </motion.div>
          <div className={styles.right}>
            <div>
              <motion.div 
                whileHover={{
                  y: -50,
                  transition: { duration: 1 },
                }}
                className={styles.img_logo}
              >
                <Image src='/Beatles_logo.png' width="800px" height="500px" />
              </motion.div>
            </div>
            <Link href="/scroll">
              <motion.button 
                className={styles.btn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 17 }}
              >
                  ¡Vive la Beatlemanía!
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default index;