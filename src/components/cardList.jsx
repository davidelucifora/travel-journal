import React from 'react'
import data from './../data'
import Card from './card'

function CardList() {

    const cardsArray = data.map(card => 

        <Card 
        key = {card.id}
        card = {card}
        />

    )

    return(
        <div id="card-list">
            {cardsArray}
        </div>
    )

}

export default CardList