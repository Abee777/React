import React from "react";
import loc from "../images/location.png"

export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.item.img} className="image" alt="location_image"/>
            <div className="card--stats">
                <div className="location">
                    <img src={loc} alt="loc" className="loc--image"/>
                    <p className="loc">{prop.item.location}</p>
                    <a href={prop.item.googleMapsUrl} target="_blank" className="link" rel="noreferrer" >View on Google Maps</a>
                </div>
                
                <h1 className="title">{prop.item.title}</h1>
                <h4>{prop.item.startDate} - {prop.item.endDate}</h4>
                <p className="desc">{prop.item.description}</p>
            </div>
        </div>
    )
}