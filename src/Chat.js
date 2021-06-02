import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

function chat({ name, message, timestamp, profilePic }) {
    return (
        <Link to = {`/chat/${name}`}>
            <div className = "chat">
                <Avatar className = "chat__image" src = {profilePic}  />
                <div className = "chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className = "chat__timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default chat
