import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const AllHousesList = (props) => {

    const [houseList, setHouseList] = useState('');

    useEffect(() => {
        axios.get('https://legacy--api.herokuapp.com/api/v1/houses')
            .then(res => {
                console.log(res.data);
                setHouseList(res.data);
            })
            .catch(err => console.error(err));
    }, [])


    return (
        <div>
            <NavBar />
            <h1>All Houses</h1>
            <div>
                {
                    houseList && houseList.map((name, i) => {
                        return <p key={i}>
                            {name.name}
                        </p>
                    })
                }
            </div>
        </div>
    )
}

export default AllHousesList;