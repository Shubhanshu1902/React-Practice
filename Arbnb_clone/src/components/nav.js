import icon from '../images/icon.png'
import './styles/nacv.css'

export const Nav = () =>{
    return(
        <nav className='navbar'>
            <img className='nav-logo' src = {icon} alt = 'icon' />
        </nav>
    );
}