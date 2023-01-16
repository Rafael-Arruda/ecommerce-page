import React, {useContext} from "react";

import * as C from './style';

import cartImage from '../../images/image-product-1-thumbnail.jpg';

import {MdDelete} from 'react-icons/md';

import { CartContext } from "../../contexts/cart";

export default function Cart() {

    const {items, handleDeleteItem} = useContext(CartContext);

    return(
        <C.Container>
            <C.Title>Cart</C.Title>
            <C.Content>
            {items ? 
            <>
                <div className="box-details">
                    <img src={cartImage} alt="cart image"/>
                    <div>
                        <h5>Fall Limited Edition Sneakers</h5>
                        <span>$125.00 x {items} <span className="result">${125 * items}.00</span></span>
                    </div>
                    <MdDelete onClick={handleDeleteItem} size={20} color="#ddd"/>
                </div>
                <button>Checkout</button>
            </>
            :
                <span>Your cart is empty.</span>
            }
            </C.Content>

        </C.Container>
    )
}