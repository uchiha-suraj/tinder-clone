import React from 'react';
import './ChatScreen.css';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Rini",
            image: "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg",
            message: "What's up",
        },
        {
            name: "Rini",
            image: "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg",
            message: "How r u?",
        },
        {
            
            message: "How it's going",
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className = "chatScreen">
            <p className = "chatScreen__timestamp">YOU MATCHED WITH RINI ON 10/09/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className = "chatScreen__message">
                        <Avatar
                            className = "chatScreen__image"
                            alt = {message.name}
                            src = {message.image}
                        />
                        <p className = "chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className = "chatScreen__message">
                        <p className = "chatScreen__textUser">{message.message}</p>
                    </div>
                )                
            ))}
             
            <form className = "chatScreen__input">
                <input
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    className = "chatScreen__inputField" 
                    placeholder = "Type a message" 
                    type = "text" />
                <button onClick = {handleSend} type = "submit" className = "chatScreen__inputButton">SEND</button>
            </form>
            
        </div>
    )
}

export default ChatScreen
