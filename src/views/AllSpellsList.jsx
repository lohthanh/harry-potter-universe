import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import styles from '../components/Display.module.css';
import { motion } from 'framer-motion';

const AllSpellsList = () => {

    const [spellList, setSpellList] = useState('');

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/spells')
            .then(res => {
                console.log(res.data.data);
                setSpellList(res.data.data);
            })
            .catch(err => console.error(err));
    }, [])


    return (
        <div className={styles.bgSpell}>
            <NavBar />
            <motion.h1 
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.3, ease: 'linear'}} className={styles.spellsTitle}>Spells</motion.h1>
            <div className={styles.grid}>
                {spellList && spellList.map((spell, i) => {
                    return <div key={i}>
                        <div className={styles.spell}>
                            {
                                spell.attributes.image ?
                                <img className={styles.spellImg} src={spell.attributes.image}/>
                                : 
                                <img className={styles.altImg} src='https://e1.pxfuel.com/desktop-wallpaper/370/936/desktop-wallpaper-magic-harry-potter-symbol-on-dog-harry-potter-symbols.jpg' />
                            }
                            <p>{spell.attributes.name}</p>
                            <p>{spell.attributes.effect}</p>
                           
                        </div>
                    </div>
                })
                }

            </div>
        </div>
    )
}

export default AllSpellsList;