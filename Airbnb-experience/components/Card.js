import React from "react";
import star from "../images/star_1.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } else {
        badgeText = props.item.location
    }  
    console.log(props.img)

    return (   
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" alt="experience"/>
            <div className="card--stats">
                <img src={star} className="card--star" alt=""/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="card--price">From ${props.item.price}</span> / person</p>
        </div>
    )
}