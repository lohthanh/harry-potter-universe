import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

const AllSpellsList = () => {

    const [spellList, setSpellList] = useState('');

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/spells')
            .then(res => {
                console.log(res.data.data);
                setSpellList(res.data.data);
            })
            .catch(err => console.error(err));
    }, [])


    return (
        <div>
            <NavBar />
            <h1>All Spells</h1>
            <div>
                {spellList && spellList.map((name, i) => {
                    return <p key={i}>
                        {name.attributes.name}
                    </p>
                })
                }

            </div>
        </div>
    )
}

export default AllSpellsList;