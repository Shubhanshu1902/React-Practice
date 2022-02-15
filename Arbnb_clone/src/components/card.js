import React from "react";
import katie from "../images/katie.png";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import "./styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
    return (
        <div className="card">
            <img src={katie} alt="Katie" />
            <div className="review">
                <FontAwesomeIcon
                    icon={faStar}
                    color="#FE395C"
                    style={{ width: "14px", height: "14px" }}
                />
                <small className="stars">5.0</small>
                <small className="number">(6)</small>
                <div className="circle" />
                <small className="country">USA</small>
            </div>

            <small className="title">Life lessons with Katie Zaferes</small>
            <div className="price">
                <b className="from_price">From $136</b>
                <small className="person">/ person</small>
            </div>
        </div>
    );
};

export default Card;
