import photogrid from "../images/photogrid.png";
import "./styles/photogrid.css";

const Photogrid = () => {
    return (
        <div className="photogrid">
            <img src={photogrid} alt="grid" />
            <h3>Online Experiences</h3>
            <p>
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    );
};

export default Photogrid;
