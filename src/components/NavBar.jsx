import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Display.module.css';

const NavBar = (props) => {


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
                <p><Link to={'/beasts'}>Fantasical Beasts</Link></p>
                <p><Link to={'/wands'}>Wands</Link></p>
                <p><Link to={'/locations'}>Magical Locations</Link></p>
            </div>
            <div>
                <p><Link to={'/quiz'}>Sorting Quiz</Link></p>
            </div>
        </div>
    )
}

export default NavBar;