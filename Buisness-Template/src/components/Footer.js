import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebook,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Scripts/footer.css'


const Foooter = () =>{
    return(
        <footer className='foot'>
            <FontAwesomeIcon icon={faTwitter} color = '#918E9B' size = 'lg'/>
            <FontAwesomeIcon icon={faFacebook} color = '#918E9B' size = 'lg'/>
            <FontAwesomeIcon icon={faInstagram} color = '#918E9B' size = 'lg'/>
            <FontAwesomeIcon icon={faGithub} color = '#918E9B' size = 'lg'/>
        </footer>
    );
}

export default Foooter;