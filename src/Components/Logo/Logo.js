

import React from 'react';
import classes from './Logo.module.css';
import logoImage from '../../assets/images/burger-logo.png';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logoImage} alt="Burger Builder" />
        </div>
    )
}


export default logo;