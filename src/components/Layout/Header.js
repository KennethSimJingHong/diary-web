import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>Diary app <span>by Kenneth</span></h1>
            <nav>
                <ul>
                    <li><NavLink className={(navData) => navData.isActive ? classes.active : ''}  to="/home">Home</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.active : ''} to="/create">Create</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;