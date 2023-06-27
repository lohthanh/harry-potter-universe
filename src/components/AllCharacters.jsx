import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllCharacters = (props) => {

    const [allCharacterList, setAllCharacterList] = useState([]);

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/characters')
            .then(res => {
            console.log(res.data);
            setAllCharacterList(res.data);
        })
            .catch(err => console.error(err));
    }, []);

    const characterNames = allCharacterList.map(character => character.name);
    console.log(characterNames);

  return (
    <div>
        <h1>All Characters</h1>
        <div>
           {/* {
            allCharacterList.map( (name, i) => {
                return <p key={i}>
                    {name[0].attributes.name}
                </p>
            })
           } */}
         
        </div>
    </div>
  )
}

export default AllCharacters;