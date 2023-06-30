import React from 'react';
import styles from '../components/ViewOne.module.css';

export const OneBook = ({oneBook}) => {

    return (
        <div className={`${styles.container}`}>
          <h2>{oneBook.attributes.title}</h2>
          <p>Author: {oneBook.attributes.author}</p>
          <p>Release Date: {oneBook.attributes.release_date} Pages: {oneBook.attributes.pages}</p>
          <p>{oneBook.attributes.summary}</p>
        </div>
      );
}
