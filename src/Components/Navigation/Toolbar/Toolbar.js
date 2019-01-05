

import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
        <div className={classes.showOnMobile} onClick={props.clicked}>
         <div className={classes.MenuIcon}></div> 
         <div className={classes.MenuIcon}></div> 
         <div className={classes.MenuIcon}></div> 
         </div>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
           <Navigation/>
            </nav>
        </header>
    )
};


export default toolbar;