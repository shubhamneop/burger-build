import React, { useState } from 'react';
import {connect} from 'react-redux';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import sideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
    const [showSideDrawer, setShowSideDrwer] = useState(false);
    
   const sideDrawerClosedHandler = () => {
        setShowSideDrwer(false);
    }

   const sideDrawerToggleHandler = () => {
        setShowSideDrwer(!showSideDrawer);
    }

        return (
            <Aux>
                <Toolbar
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={props.isAuthenticated}
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);