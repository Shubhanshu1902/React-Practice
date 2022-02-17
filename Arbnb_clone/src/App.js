import { Nav } from "./components/nav";

import "./app.css";
import Photogrid from "./components/photogrid";
import Card from "./components/card";
import data from "./Data/data";

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
                openSlots = {item.openSpots} 
            />
        );
    });

    return (
        <div className="mainbody    ">
            <div
                style={{
                    width: "550px",
                    height: "853px",
                    background: "#ffffff",
                }}
            >
                <Nav />
                <Photogrid />
                <div className="cards">{cards}</div>
            </div>
        </div>
    );
}

export default App;
