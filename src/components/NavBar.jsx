import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Display.module.css';
import { motion } from 'framer-motion';


const NavBar = (props) => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const homePageLink = () => {
        if (!isHomePage) {
            return (
                <motion.p  whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/'}>Home Page</Link></motion.p>
            )
        };
    };

    return (
        <div className={`${styles.navbar}`}>
            <div>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/movies'}>Movies</Link></motion.p>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/books'}>Books</Link></motion.p>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/characters'}>Characters</Link></motion.p>
            </div>
            <div>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/houses'}>Houses</Link></motion.p>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/spells'}>Spells</Link></motion.p>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/potions'}>Potions</Link></motion.p>
            </div>
            <div>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/locations'}>Magical Locations</Link></motion.p>
                <motion.p whileHover={{scale: 1.2, transition: {duration: 0.7}}}><Link to={'/quiz'}>Sorting Quiz</Link></motion.p>
                {/* if this is the home page, don't show link, if its not, show link */}
                {
                 homePageLink()   
                }
            </div>
        </div>
    )
}

export default NavBar;