// import Quiz from '../components/Quiz';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { response } from 'express';

const QuizResults = (quizData) => {
    const results = quizData;
    const [ sortedHouse, setSortedHouse ] = useState({ ...results });
    const { id } = useParams();

    useEffect( () => {
        axios.get(`http://localhost:8000/api/results/${id}`, {
            answers: [ sortedHouse, ]
        })
            .then( res => {
                setSortedHouse(res.data.data);
            } )
            .catch( err => response.status(400).json( err ) );
        }, [id]);


    return (
        <>
        { sortedHouse.map( house =>  
        <div key={ house._id }>
            <p>{ house._id }</p>
        </div>
        )}
        </>
    )
}

// export default QuizResults;