import './Scripts/About.css'

const About = (props) => {
    return(
        <div className="about">
            <h3>
                {props.heading}
            </h3>

            <p>
                {props.content}
            </p>
        </div>
    );
}

export default About;
