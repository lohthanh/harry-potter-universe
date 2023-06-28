import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Display.module.css';

const NavBar = (props) => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const homePageLink = () => {
        if (!isHomePage) {
            return (
                <p><Link to={'/'}>Home Page</Link></p>
            )
        };
    };

    return (
        <div className={`${styles.navbar}`}>
            <div>
                <p><Link to={'/characters'}>Characters</Link></p>
                <p><Link to={'/movies'}>Movies</Link></p>
                <p><Link to={'/books'}>Books</Link></p>
            </div>
            <div>
                <p><Link to={'/houses'}>Houses</Link></p>
                <p><Link to={'/spells'}>Spells</Link></p>
                <p><Link to={'/potions'}>Potions</Link></p>
            </div>
            <div>
                <p><Link to={'/species'}>Fantasical Beasts</Link></p>
                <p><Link to={'/wands'}>Wands</Link></p>
                <p><Link to={'/locations'}>Magical Locations</Link></p>
            </div>
            <div>
                <p><Link to={'/quiz'}>Sorting Quiz</Link></p>
                {/* if this is the home page, don't show link, if its not, show link */}
                {
                 homePageLink()   
                }
            </div>
        </div>
    )
}

export default NavBar;