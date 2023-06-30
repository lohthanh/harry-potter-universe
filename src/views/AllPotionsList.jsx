import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import styles from '../components/Display.module.css';
import { motion } from 'framer-motion';


const AllPotionsList = () => {

    const [potionList, setPotionList] = useState('');

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/potions')
            .then(res => {
                console.log(res.data.data);
                setPotionList(res.data.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={styles.bgPotions}>
            <NavBar />
            <motion.h1 className={styles.potionTitle} animate={{ x: 100 }} transition={{type: 'spring', stiffness: 100}} >Potions</motion.h1>
            <div className={styles.displayPotions} >
                {potionList && potionList.map((potion, i) => {
                    return <motion.div whileHover={{scale: 1.2, transition: {duration: 0.8}}} key={i}>
                        {
                            potion.attributes.image ?
                                <img className={styles.potionImg} src={potion.attributes.image} />
                                :
                                <img className={styles.potionAlt} src='https://www.hp-lexicon.org/wp-content/uploads/2015/09/blue-potion-a-label.png' />
                        }

                        <p>{potion.attributes.name}</p>

                        {
                            potion.attributes.difficulty ?
                                <p>Difficulty: {potion.attributes.difficulty}</p>
                                : ''
                        }

                        {
                            potion.attributes.effect ?
                                <p>Effect: {potion.attributes.effect}</p>
                                : ''
                        }

                        {
                            potion.attributes.ingredients ?
                                <p>Ingredients: {potion.attributes.ingredients}</p>
                                : ''
                        }

                    </motion.div>
                })
                }

            </div>
        </div>

    )
}

export default AllPotionsList;