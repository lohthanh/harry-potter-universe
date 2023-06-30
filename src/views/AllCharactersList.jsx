import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const AllCharactersList = (props) => {

    const [allCharacterList, setAllCharacterList] = useState('');

    useEffect(() => {
        axios.get('https://hp-api.onrender.com/api/characters')
            .then(res => {
                console.log(res.data);
                setAllCharacterList(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    // const characterNames = allCharacterList.map(character => character.name);
    // console.log(characterNames);

    console.log(allCharacterList)
    return (
        <div>
            <NavBar />

            <h1>All Characters</h1>
            <div>
                {allCharacterList &&
                    allCharacterList.map((name, i) => {
                        return <p key={i}>
                            {name.name}
                        </p>
                    })
                }

            </div>
        </div>
    )
}

export default AllCharactersList;