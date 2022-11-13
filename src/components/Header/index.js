import React from "react";
import * as C from './style';

import iconCart from '../../images/icon-cart.svg';
import imageUser from '../../images/image-avatar.png';
import iconMenu from '../../images/icon-menu.svg';

const Header = () => {
    return(
        <C.Container>
            <C.Content>
                <C.LogoArea>
                    <img className="icon_menu" src={iconMenu} alt="icon menu"/>
                    <h1>sneakers</h1>
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