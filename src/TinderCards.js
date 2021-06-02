import React from 'react';
import { useState } from 'react';
import './TinderCard.css';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';
import database from './firebase';

function TinderCards() {
    const [people, setPeople] = useState([]);

    // piece of code which run based on condition 
    useEffect(() => {
        const Unsubscribe = database
            .collection("people")
            .onSnapshot((snapshot) => 
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );

        return () => {
            // this is cleanup...
            Unsubscribe();
        };
    }, []);

    return (
        <div>
            <div className = "tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe = {[ 'up', 'down' ]}
                    >
                        <div
                            style = {{ backgroundImage: `url(${person.url})` }}
                            className = "card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
