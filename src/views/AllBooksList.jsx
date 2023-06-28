import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const AllBooksList = () => {

    const [bookList, setBookList] = useState('');

    useEffect(() => {
        axios.get('https://api.potterdb.com/v1/books')
            .then(res => {
                console.log(res.data.data);
                setBookList(res.data.data);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <NavBar />
            <h1>All Books</h1>
            <div>
                {
                    bookList && bookList.map( (title, i) => {
                        return <p key={i}>
                            {title.attributes.title}
                        </p>
                    })
                }
            </div>
        </div>
    )
}

export default AllBooksList;