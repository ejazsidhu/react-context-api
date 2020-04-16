import React, { Component } from 'react';
import styles from './navbar.module.css'
import {ThemeContext} from '../../context/theme-context/themeContext';
class Navbar extends Component {
    static contextType=ThemeContext
    render() { 
        console.log(this.context);
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        return ( 
            <nav  style={{background:theme.ui,color:theme.text,}}>
                <h1>Context Api</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
            </nav>
         );
    }
}
 
export default Navbar;