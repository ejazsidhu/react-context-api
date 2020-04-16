import React, { Component } from 'react';
import styles from './bookList.module.css';
import {ThemeContext} from '../../context/theme-context/themeContext';

class BookList extends Component {
    static contextType=ThemeContext

    render() {
        console.log(this.context);
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        return (
            <div className="book-list" style={{background:theme.ui,color:theme.text}}>
                <h1>Book List </h1>
                <ul>
                    <li style={{background:theme.ui}}>
                        thi way of king
                    </li>
                    <li style={{background:theme.ui}}>
                        the name of wind
                    </li>
                    <li style={{background:theme.ui}}>
                        the final empire

                    </li>
                </ul>
            </div>
        );
    }
}

export default BookList;