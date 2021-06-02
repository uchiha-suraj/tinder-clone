import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ backButton }) {
    // is used to remember the browser history
    const history = useHistory();

    return (
        <div className = "header">
            {backButton ? (
                <IconButton onClick = {() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize = "large" className = "header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className = "header__icon" fontSize = "large" />
                </IconButton>
            )}
            
            <Link to = "/">
                <img 
                    className = "header__logo"
                    src = "https://p.kindpng.com/picc/s/19-195266_tinder-icon-2017-logo-vector-gradient-tinder-logo.png" 
                    alt = "tinder logo" 
                />
            </Link>
            
            <Link to = "/chat">
                <IconButton>
                    <ForumIcon className = "header__icon" fontSize = "large" />
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header
