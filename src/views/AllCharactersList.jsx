import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import styles from '../components/Display.module.css';
import { motion } from 'framer-motion';



const AllCharactersList = (props) => {

    const [allCharacterList, setAllCharacterList] = useState([]);
    const [person, setPerson] = useState();
    const loaded = useRef(false);

    useEffect(() => {
        if (!loaded.current) {
            loaded.current = true
            axios.get('https://hp-api.onrender.com/api/characters')
                .then(res => {
                    console.log(res.data);
                    setAllCharacterList(res.data);
                })
                .catch(err => console.error(err))
        }
    }, []);


    const onCharacterClick = (characterId) => {
        axios.get('https://hp-api.onrender.com/api/character/' + characterId)
            .then(res => {
                console.log(res.data);
                setPerson(res.data[0]);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <NavBar />

            <h1>All Characters</h1>
            <div className={styles.display}>
                <div className={styles.characterList}>
                    <ul>
                        {allCharacterList &&
                            allCharacterList.map((name, i) => {
                                return <li key={i} >
                                    <p className={styles.person} onClick={() => onCharacterClick(name.id)}>{name.name}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                {/* show each character */}
                <div className={styles.personDisplay}>
                    <h3>{person?.name}</h3>
                    {
                        person?.gender ? <p>Gender: {person?.gender}</p> : ''
                    }
                    {
                        person?.house ? <p>House: {person?.house}</p> : ''
                    }
                    {
                        person?.patronus ? <p>Patronus: {person?.patronus}</p> : ''
                    }

                    <br />
                    
                    <img className={styles.personImg} src={person?.image} />
                </div>
            </div>
        </div>
    )
}

export default AllCharactersList;