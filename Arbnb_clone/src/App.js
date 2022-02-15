import { Nav } from "./components/nav";

import "./app.css";
import Photogrid from "./components/photogrid";
import Card from "./components/card";

function App() {
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
                <Card /> 
            </div>
        </div>
    );
}

export default App;
