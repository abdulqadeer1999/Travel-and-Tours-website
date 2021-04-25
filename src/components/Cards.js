import React from 'react'
import CardItems from './CardItems'
import Adventure from "../images/img-9.jpg"
import Adventure2 from "../images/img-2.jpg"
import Adventure3 from "../images/img-3.jpg"
import Adventure4 from "../images/img-4.jpg"
import Adventure8 from "../images/img-8.jpg"

import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                        src={Adventure}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                         />
                           <CardItems 
                        src={Adventure2}
                        text="Travel through the Islands of Bali in a Private Cruise "
                        label="Luxury"
                        path="/services"
                         />
                    </ul>
                    <ul className="cards__items">
                        <CardItems 
                        src={Adventure3}
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label="Mystery"
                        path="/services"
                         />
                           <CardItems 
                        src={Adventure4}
                        text="Experience Football on Top of the Himilayan Mountains "
                        label="Adventure"
                        path="/products"
                         />
                             <CardItems 
                        src={Adventure8}
                        text="Ride through the Sahara Desert on a guided camel tour "
                        label="AdrenaLine"
                        path="/sign-up"
                         />
                          
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
