import React from "react";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import "./styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = props => {
    let badgeText;
    if (props.openSlots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.country === "Online") {
        badgeText = "ONLINE";
    }

    // console.log(img)
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={require(`../images/${props.img}`)} alt="Katie" />
            <div className="review">
                <FontAwesomeIcon
                    icon={faStar}
                    color="#FE395C"
                    style={{ width: "14px", height: "14px" }}
                />
                <small className="stars">{props.rating}</small>
                <small className="number">({props.reviewCount})</small>
                <div className="circle" />
                <small className="country">{props.country}</small>
            </div>

            <small className="title">{props.title}</small>
            <div className="price">
                <b className="from_price">From ${props.price}</b>
                <small className="person">/ person</small>
            </div>
        </div>
    );
};

export default Card;
