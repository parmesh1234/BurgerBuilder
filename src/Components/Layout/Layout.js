

import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer : false
    }
    sideDrawerCloseHandler = () =>{
        this.setState({showSideDrawer: !this.state.showSideDrawer});
    }
    render() {
        return (
        <Aux>
            <Toolbar open="true" clicked={this.sideDrawerCloseHandler} />
            <SideDrawer
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerCloseHandler}/>
            <main className={classes.Content}>
                 {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout;