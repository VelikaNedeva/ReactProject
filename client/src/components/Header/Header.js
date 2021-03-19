import style from './Header.module.css';
import NavigationListItem from './NavigationListItem/NavigationListItem';
import {NavLink} from 'react-router-dom';

const Header = () =>{
    return(
        <nav className={style.navigation}>
        <ul>
            <NavLink exact={true} to="/" ><NavigationListItem>Home</NavigationListItem></NavLink>
            <NavLink exact={true} to="/about"><NavigationListItem>About</NavigationListItem></NavLink>
            <NavLink exact={true} to="/contact"><NavigationListItem>Contact</NavigationListItem></NavLink>
            <NavLink exact={true} to="/login"><NavigationListItem>Login</NavigationListItem></NavLink>
            <NavLink exact={true} to="/register"><NavigationListItem>Register</NavigationListItem></NavLink>
        </ul>
    </nav>
    );
}

export default Header;