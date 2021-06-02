import React from 'react';
import ChatScreen from './ChatScreen';

function ChatFriend() {
    return (
        <div className = "chatFriend">
            <ChatScreen 
                name = "Rini"
                message = "Whats up ;)"
                profilePic = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            />

            <ChatScreen 
                name = "Priya"
                message = "Hi... How it's going??"
                profilePic = "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
        </div>
    )
}

export default ChatFriend
