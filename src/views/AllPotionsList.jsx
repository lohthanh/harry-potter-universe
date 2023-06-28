import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const AllPotionsList = () => {

    const [potionList, setPotionList] = useState('');

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/potions')
            .then(res => {
                console.log(res.data.data);
                setPotionList(res.data.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <NavBar />

            <h1>All Potions</h1>
            <div>
                {potionList && potionList.map((name, i) => {
                        return <p key={i}>
                            {name.attributes.name}
                        </p>
                    })
                }

            </div>
        </div>

    )
}

export default AllPotionsList;