import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import styles from '../components/Display.module.css';
import { animate, motion } from 'framer-motion';

const AllHousesList = (props) => {

    const [houseList, setHouseList] = useState([]);
    const [fetchOneHouse, setFetchOneHouse] = useState('');
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(<img src='C:/Users/lohth/OneDrive/Desktop/CodingDojo/Projects/harryPotterUniverse/server/client/public/hp-houses.jpg' />);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get('https://legacy--api.herokuapp.com/api/v1/houses')
            .then(res => {
                console.log(res.data);
                setHouseList(res.data);
            })
            .catch(err => console.error(err));
    }, [])

    // const fetchHouseData = (houseId) => {
    //     axios.get('https://legacy--api.herokuapp.com/api/v1/houses/' + houseId)
    //     .then(res => {
    //         console.log(res.data);
    //         setFetchOneHouse(res.data);
    //         setBackgroundImageUrl(houseBackgroundImages[res.data.name])
    //     })
    //     .catch(err => console.error(err));
    // }


    // const fetchMembers = () => {
    //     const houseName = {
    //         Gryffindor: 'gryffindor',
    //         Hufflepuff: 'hufflepuff',
    //         Ravenclaw: 'ravenclaw',
    //         Slytherin: 'slytherin'
    //     }

    //     axios.get('https://hp-api.onrender.com/api/characters/house/' + houseName)
    //     .then(res => {
    //         console.log(res.data);
    //         setMembers(res.data);
    //     })
    //     .catch(err => console.error(err));
    // }

    const handleClick = (houseId) => {
        axios.get('https://legacy--api.herokuapp.com/api/v1/houses/' + houseId)
            .then(res => {
                console.log(res.data);
                setFetchOneHouse(res.data);
                setBackgroundImageUrl(houseBackgroundImages[res.data.name]);

                const houseName = {
                    Gryffindor: 'gryffindor',
                    Hufflepuff: 'hufflepuff',
                    Ravenclaw: 'ravenclaw',
                    Slytherin: 'slytherin'
                };

                // Get members based on house name
                axios.get('https://hp-api.onrender.com/api/characters/house/' + houseName[res.data.name])
                    .then(res => {
                        console.log(res.data);
                        setMembers(res.data);
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));

    }

    const houseBackgroundImages = {
        Gryffindor: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d4vhcln-f86c4d22-ccfe-4140-a241-6c9cf2dbcf03.jpg/v1/fill/w_900,h_507,q_75,strp/hogwarts_house_wallpaper___gryffindor_by_theladyavatar_d4vhcln-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNHZoY2xuLWY4NmM0ZDIyLWNjZmUtNDE0MC1hMjQxLTZjOWNmMmRiY2YwMy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R1lAyz8MVmyXACuetGFXR1bmV_9qlPJQiaFb6YlpGLw',
        Hufflepuff: 'https://wallpapers.com/images/hd/grunge-hufflepuff-crest-fozpekmrnbm6he4w.jpg',
        Ravenclaw: 'https://wallpaper.dog/large/10983.jpg',
        Slytherin: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dfidoau-d90f6564-22da-404f-a0dd-2f005f629ab7.jpg/v1/fill/w_1192,h_670,q_70,strp/slytherin__hogwarts_legacy__animated_wallpaper_by_favorisxp_dfidoau-pre.jpg'
    }

    return (
        <div className={`${styles.bgHouse}`}
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundColor: 'black',
                backgroundPosition: 'center',
                height: '100vh',
                paddingLeft: '40px'
            }} >
            <NavBar />
            <motion.h1 className={styles.houseTitle}  
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.7, ease: 'linear'}}>Houses of Hogwarts</motion.h1>
            <div className={`${styles.houseDisplay}`} >
                {
                    houseList && houseList.map((house, i) => {
                        return <div className={`${styles.house}`} key={i}>
                            <motion.div className={styles.houseNames}
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.7, ease: 'linear'}}>
                                <img className={`${styles.img}`} src={house.image_url} onClick={() => handleClick(house.id)} />
                                <h2 onClick={() => handleClick(house.id)}>{house.name}</h2>
                            </motion.div>
                        </div>
                    })
                }
            </div>
            <div className={`${styles.displayDiv}`}>
                {fetchOneHouse && members && (
                    <motion.div initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.7, ease: 'linear'}} >
                        <ul >
                            <li><h2>{fetchOneHouse.name}</h2></li>
                            <li>Founder: {fetchOneHouse.founder}</li>
                            <li>Ghost: {fetchOneHouse.ghost}</li>
                            <li>Traits: {fetchOneHouse.traits}</li>
                            <li>Colors: {fetchOneHouse.colors}</li>
                            <li>Members: {fetchOneHouse.members}</li>
                            {members.length > 0 && (
                                <li>
                                    {members.map((member) => member.name).join(", ")}
                                </li>
                            )}
                        </ul>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AllHousesList;