import React, { Component } from 'react';
import styles from './navbar.module.css'
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className={styles.nav}>
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