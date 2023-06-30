import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import styles from '../components/Display.module.css';
import { OneBook } from '../components/OneBook';
import { motion } from 'framer-motion';

const AllBooksList = () => {
    const [bookList, setBookList] = useState([]);
    const [displayBook, setDisplayBook] = useState();

    useEffect(() => {
        axios
            .get('https://api.potterdb.com/v1/books')
            .then(res => {
                console.log(res.data.data);
                setBookList(res.data.data);
            })
            .catch(err => console.error(err));
    }, []);

    const handleClick = bookIndex => {
        setDisplayBook(bookIndex);
    };

    return (
        <div className={`${styles.bgImg}`}>
            <NavBar />
            <motion.h1
                 initial={{opacity: 0, scale: 0.5}}
                 animate={{opacity: 1, scale: 1}}
                 transition={{duration: 0.6, ease: 'linear'}}
                 className={styles.bookTitle}>Harry Potter Novels</motion.h1>
            <div className={`${styles.display}`}>
                {bookList &&
                    bookList.map((title, i) => {
                        return (
                            <motion.div className={`${styles.book }`} key={i}
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, ease: 'linear'}}>
                                <img
                                    className={`${styles.img}`}
                                    src={title.attributes.cover}
                                    onClick={() => handleClick(i)}
                                />
                                <br />
                                <p
                                    className={`${styles.title}`}
                                    onClick={() => handleClick(i)}
                                >
                                    {title.attributes.title}
                                </p>
                            </motion.div>
                        );
                    })}
            </div>
            {displayBook !== undefined && (
                <motion.div id={displayBook}
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.6, ease: 'linear'}}>
                    <OneBook oneBook={bookList[displayBook]} />
                </motion.div>
            )}
        </div>
    );
};

export default AllBooksList;



// const AllBooksList = () => {

//     const [bookList, setBookList] = useState([]);
//     const [displayBook, setDisplayBook] = useState();


//     useEffect(() => {
//         axios.get('https://api.potterdb.com/v1/books')
//             .then(res => {
//                 console.log(res.data.data);
//                 setBookList(res.data.data);
//             })
//             .catch(err => console.error(err));
//     }, [])

//     const handleClick = bookIndex => {
//         setDisplayBook(bookIndex);   
//     }

//     return (
//         <div className={`${styles.bgImg}`}>
//             <NavBar />
//             <h1>Harry Potter Novels</h1>
//             <div className={`${styles.display}`}>
//                 {
//                     bookList && bookList.map( (title, i) => {
//                         return <div className={`${styles.book}`} key={i}>
//                             <img className={`${styles.img}`} src={title.attributes.cover} onClick={ () => handleClick(i)} /><br />
//                             <p className={`${styles.title}`} onClick={ () => handleClick(i)}>{title.attributes.title} </p>
//                         </div>
//                     })
//                 }
//             </div>
//             {
//                 displayBook && ( <div id={displayBook}> <OneBook oneBook = {bookList[displayBook]} /> </div> )

//             }

//         </div>
//     )
// }

// export default AllBooksList;
