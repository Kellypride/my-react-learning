import React from "react";

import "./Card.css"

export default function Card(props) {
    let badgeText 
    if (props.item.openspots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.item.location === ".Online") {
        badgeText = "ONLINE"
    }else {
        badgeText = ""
    }
    return (
        <div>
            <section className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <div>
                    <img src={require('../../assets/'+props.item.img)} alt="" className="card-image" />
                    <div>
                        <img src={require('../../assets/'+props.item.icon)} alt="star-icon" className="card-star" />
                        <span>{props.item.stats.rating}</span>
                        <span className="gray">{props.item.stats.reviewCount}</span>
                        <span className="gray">{props.item.location}</span>
                    </div>
                    <p>{props.title} </p>
                    <p><span className="bold">From {props.item.price}</span> / person</p>
                </div>

            </section>
        </div>
    )
}