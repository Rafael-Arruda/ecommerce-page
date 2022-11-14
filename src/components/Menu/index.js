import React from "react";

import * as C from './style';

import closeMenu from '../../images/icon-close.svg';

export default function Menu({close}) {
    return(
        <C.Container>
            <C.Fade></C.Fade>
            <C.Navigation>
                <img onClick={close} className="close-menu" src={closeMenu} alt="close menu"/>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Woman</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </C.Navigation>
        </C.Container>
    )
}