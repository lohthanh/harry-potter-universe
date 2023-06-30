import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import styles from '../components/ViewOne.module.css';
import { Link } from 'react-router-dom';

const OneMovie = () => {

    const [displayOneMovie, setDisplayOneMovie] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/movies/' + id)
            .then(res => {
                console.log(res.data.data.attributes);
                setDisplayOneMovie(res.data.data.attributes);
            })
            .catch(err => console.error(err));
    }, [])

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className={`${styles.movieBg}`}>
            <NavBar />
            <div className={`${styles.container2}`}>
                <h1>{displayOneMovie.title}</h1>

                <div className={`${styles.display}`}>
                    <div className={`${styles.leftCol}`} >
                        {/* <img src={displayOneMovie.poster} width={230} height={300} alt='harry-potter-movie-poster' /> */}

                        {displayOneMovie.poster ? (
                            <img src={displayOneMovie.poster} width={230} height={300} alt='harry-potter-movie-poster' />
                        ) : (
                            <img src='https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_.jpg' width={230} height={300} alt='fallback-poster' />
                        )}
                        <p>Directed by: {displayOneMovie.directors}</p>
                        <p>Release Date: {displayOneMovie.release_date}</p>
                        <p>Running Time: {displayOneMovie.running_time}</p>

                    </div>
                    <div >
                        <video width={720} height={340} controls loop>
                            <source src={displayOneMovie.trailer} type='video/mp4' />
                            <source src={displayOneMovie.trailer} type='video/webm' />
                            Your browser doesn't support video playback.
                        </video>
                        <p>{displayOneMovie.summary}</p>
                    </div>
                </div>
                <p><Link to={displayOneMovie.wiki} >{displayOneMovie.wiki}</Link></p>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default OneMovie;