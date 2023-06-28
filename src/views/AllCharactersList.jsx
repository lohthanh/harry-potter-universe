import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const AllCharactersList = (props) => {

    const [allCharacterList, setAllCharacterList] = useState('');

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/characters')
            .then(res => {
                console.log(res.data.data);
                setAllCharacterList(res.data.data);
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
                            {name.attributes.name}
                        </p>
                    })
                }

            </div>
        </div>
    )
}

export default AllCharactersList;