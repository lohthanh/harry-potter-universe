import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

const AllMoviesList = (props) => {

    const [movieList, setMovieList] = useState('');

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/movies')
            .then(res => {
                console.log(res.data.data);
                setMovieList(res.data.data);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <NavBar />
            <h1>All Movies</h1>
            <div>
                {movieList &&
                    movieList.map((title, i) => {
                        return <p key={i}>
                            {title.attributes.title}
                        </p>
                    })
                }
            </div>
        </div>
    )
}

export default AllMoviesList;