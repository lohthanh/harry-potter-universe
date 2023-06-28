import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const AllSpeciesList = () => {

    const [beastList, setBeastList] = useState('');

    useEffect(() => {
        axios.get('https://legacy--api.herokuapp.com/api/v1/species')
            .then(res => {
                console.log(res.data);
                setBeastList(res.data);
            })
            .catch(err => console.error(err));
    }, []);

  return (
    <div>
            <NavBar />

            <h1>All Species/Beasts</h1>
            <div>
                {beastList && beastList.map((name, i) => {
                        return <p key={i}>
                            {name.name}
                        </p>
                    })
                }

            </div>
        </div>
  )
}

export default AllSpeciesList;