import React from 'react'
import Logo from '../../Assets/logo.jpg'
import './Navbar.css'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className="navbar__container">
            <div className="navbar__logo">
                <Avatar src={Logo} className={classes.large} />
                {/* <img src={Logo} alt="logo" className="navbar__logo" /> */}
                <h3 className="navbar__title">DEBDUT AIRLINE</h3>
            </div>
            <AccountCircleIcon className="home__accicon" />
        </div>
    )
}

export default Navbar
