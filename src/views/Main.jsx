import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import styles from '../components/Display.module.css';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';

const Main = (props) => {

  return (
    <>
    {/* <ReactAudioPlayer src='https://soundcloud.com/lbr-desu/hedwigs-theme?si=92a7e1fc8acb4765a54728dab978f82d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' 
    autoPlay loop crossOrigin='' controls /> */}
    <div className={`${styles.displayContainer} ${styles.bgMain}`}>
        <NavBar />
        <div className={styles.displayMain} >
        </div>
        <motion.h1 animate={{ x: -50 }} transition={{ ease: "easeOut", duration: 3 }} className={styles.h1} >Welcome</motion.h1>
    </div>
    </>
  )
}

export default Main;

