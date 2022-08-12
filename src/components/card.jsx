import React from 'react'

function Card({card}) {

    return (    
        <div className="travel-card">
            <img src={card.featuredImageUrl} alt="" />
            
            <div id="card-data">
                <div className="card-first-line">
                    <span className ="card-location-icon"></span>
                    <p className ="card-location">{card.location}</p>
                    <a href={card.mapsUrl} className="card-google-maps-url">See on Maps</a>
            </div>
        
        <h3 className="card-title">{card.title}</h3>
        <h6 className ="card-dates">{card.dates}</h6>
        <p className="card-description">{card.description}</p>
    </div>
    </div>
)}

export default Card