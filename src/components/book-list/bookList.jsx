import React, { Component } from 'react';
import styles from './bookList.module.css';
class BookList extends Component {

    render() {
        return (
            <div className={styles.bookList}>
                <h1>Book List </h1>
                <ul>
                    <li>
                        thi way of king
                    </li>
                    <li>
                        the name of wind
                    </li>
                    <li>
                        the final empire

                    </li>
                </ul>
            </div>
        );
    }
}

export default BookList;