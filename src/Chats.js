import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className = "chats">
            <Chat
                name = "Rini"
                message = "Whats up ;)"
                timestamp = "45 minutes ago"
                profilePic = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            />

            <Chat
                name = "Priya"
                message = "Hi..."
                timestamp = " 1 hr ago"
                profilePic = "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
            

            <Chat
                name = "Souma"
                message = "How itz going"
                timestamp = "1 hr ago"
                profilePic = "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
            />

            <Chat
                name = "Mikasha"
                message = "what happend?"
                timestamp = "1 hr ago"
                profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
            />

            <Chat
                name = "Kaneki"
                message = "What's up dude"
                timestamp = "3 days ago"
                profilePic = "https://i.pinimg.com/736x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg"
            />

            <Chat
                name = "Cat Man"
                message = "chill bro ;)"
                timestamp = "3 days ago"
                profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZTtK6pHqjvMrFvkwyTP_WgXYLrSAdna_8w&usqp=CAU"
            />
        </div>
    )
}

export default Chats
