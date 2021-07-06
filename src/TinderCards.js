import React, { useState , useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import { instance } from './axios.js';

function TinderCards() {
    const [people , setPeople] = useState([]);

    useEffect(() => {
       async function fetchData() {
           const req = await instance.get('tinder/cards');
           setPeople(req.data);

       }

       fetchData();
    }, [])

    console.log(people)
    const swiped = (direction,nameToDelete) => {
        console.log('removing : '+ nameToDelete);
        // setListDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen');
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                people.map((person) => {
                    return (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up","down"]}
                            onSwipe = {(dir) => swiped(dir,person.name)} 
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div 
                                className="card"
                                style={{ backgroundImage: `url(${person.imgUrl})`}}
                            >
                                <h3>{person.name}</h3>
                            </div>
                        
                        </TinderCard>
                    );

                })
            }    
            
            </div>

        </div>
    );
}

export default TinderCards
