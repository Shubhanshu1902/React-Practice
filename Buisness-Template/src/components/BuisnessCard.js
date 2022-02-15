import Info from "./Info";
import About from "./About";
import Footer from './Footer'
import "./Scripts/buisnesscard.css";

const about = 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
const interest = 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'

const BuisnessCard = () => {
    return (
        <div className="buisnesscard">
            <div style={{ background: "#1A1B21" ,height: '716px',width:'317px' }}>
                <Info />
                <About heading = 'About' content = {about}/>
                <About heading = 'Interests' content = {interest}/>
            </div>

            <Footer />
        </div>
    );
};

export default BuisnessCard;
