import React, {useState} from "react";
import * as C from './style';

import iconCart from '../../images/icon-cart.svg';
import imageUser from '../../images/image-avatar.png';
import iconMenu from '../../images/icon-menu.svg';

import logo from '../../images/logo.svg';

//components
import Menu from "../Menu";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return(
        <C.Container>
            {showMenu && 
            <Menu
            close={toggleShowMenu}
            />
            }
            <C.Content>
                <C.LogoArea>
                    <img onClick={toggleShowMenu} className="icon_menu" src={iconMenu} alt="icon menu"/>
                    <img src={logo} alt="logo"/>
                </C.LogoArea>
                <C.Navigation>
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Woman</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </C.Navigation>
                <C.ProfileArea>
                    <img className="cart" src={iconCart} alt="cart icon"/>
                    <img className="img_profile" src={imageUser} alt="user profile"/>
                </C.ProfileArea>
            </C.Content>
        </C.Container>
    )
}

export default Header;