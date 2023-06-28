import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const AllWandsList = () => {

    const [wand, setWand] = useState('');

    useEffect ( () => {
        axios.get('https://legacy--api.herokuapp.com/api/v1/wands')
            .then(res => {
                console.log(res.data);
                setWand(res.data);
            })
            .catch(err => console.error(err));
    }, []);

  return (
    <div>
            <NavBar />

            <h1>All Wands</h1>
            <div>
                {wand && wand.map((name, i) => {
                        return <p key={i}>
                            {name.name}
                        </p>
                    })
                }

            </div>
        </div>
  )
}

export default AllWandsList;