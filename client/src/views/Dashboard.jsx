import React, { useState, useEffect } from 'react';
// import Results from './components/Results';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const { id } = useParams();
    const [ results, setResults ] = useState();

    useEffect( () => {
        axios.get('http://localhost:8000/api/results/', id)
            .then( res => {
                setResults( res.data );
            } )
            .catch( err => console.log( err ) );
    }, [id] )

    return (
        <>
        <h1>Welcome to your dashboard</h1>
        {/* <Results /> */}
        </>
    )
}

// export default Dashboard;