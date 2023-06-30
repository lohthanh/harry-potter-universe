import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import styles from '../components/Display.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const AllMoviesList = (props) => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/movies')
            .then(res => {
                console.log(res.data.data);
                setMovieList(res.data.data);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className={`${styles.bgMovie}`} >
            <NavBar />
            <motion.h1 className={styles.movieTitle}
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.7, ease: 'linear'}} >Movies</motion.h1>
            <div className={`${styles.movieDisplay}`}>
                {movieList &&
                    movieList.map((title, i) => {
                        return <motion.div className={`${styles.movie}`} key={i}
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.7, ease: 'linear'}}>

                            {
                                title.attributes.poster ? 
                                <Link to={'/movies/' + title.id}><img className={`${styles.img}`} src={title.attributes.poster} /></Link>
                                : 
                                <Link to={'/movies/' + title.id} ><img className={`${styles.marginTop}`} src='https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_.jpg' width={140} height={184} alt='fallback-poster' /></Link>
                            }
                            
                            <Link to={'/movies/' + title.id}><p className={`${styles.title}`}>{title.attributes.title}</p></Link>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}

export default AllMoviesList;
