import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faLinkedln} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import temp from "../images/Sample.png";

import "./Scripts/info.css";

const name = "Laura Smith";

const Info = () => {
    return (
        <div className="info">
            <img src={temp} alt="profile-photo" />
            <h3>{name}</h3>
            <h5>Frontend Developer</h5>
            <a href="https://bruno-simon.com/" target="_blank">
                website.com
            </a>
            <div className="buttons">
                <button className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </button>

                <button className="linkedin">
                    <FontAwesomeIcon color="white" icon={faLinkedin} />
                    Linkedln
                </button>
            </div>
        </div>
    );
};

export default Info;
