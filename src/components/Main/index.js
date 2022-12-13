import React, {useState, useContext, useEffect} from "react";

import * as C from './style';

//icons
import {FiShoppingCart} from 'react-icons/fi';

//components 
import Sample from "../Sample";
import Modal from '../Modal';

//context
import {ModalContext} from '../../contexts/modal';

const Main = () => {

    const {showModal} = useContext(ModalContext);

    const [qty, setQty] = useState(0);

    function handleAddQty() {
        if(qty < 10) {
            setQty(prev => prev + 1)
        }
    }
    function handleSubQty() {
        if(qty > 0){
            setQty(prev => prev - 1)
        }
    }

    function handleAddToCart() {
        if(qty === 0) {
            alert('Adicione pelo menos 1 item ao carrinho!')
            return
        }
        localStorage.setItem("@cartOfStore", JSON.stringify(qty))
    }

    return(
        <>
            <C.Container>
                <Sample/>

                <C.Content>
                    <h5>sneaker company</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>These low-profile sneakers are your perfect
                        casual wear companion. Featuring a durable rubber
                        outer sole, they'll withstand everything the weather
                        can offer.
                    </p>
                    <div className="box-price">
                        <div className="current-price">
                            <h2>$125.00</h2>
                            <span>50%</span>
                        </div>
                        <div className="old-price">
                            <span>$250.00</span>
                        </div>
                    </div>
                    <div className="box-add-to-cart">
                        <div className="box-qty">
                            <button onClick={handleSubQty}>-</button>
                            <span>{qty}</span>
                            <button onClick={handleAddQty}>+</button>
                        </div>
                        <button onClick={handleAddToCart} className="btn-add">
                            <FiShoppingCart size={17} color="#fff"/>
                            Add to cart
                        </button>
                    </div>
                </C.Content>
            </C.Container>
            {showModal &&
            <Modal/>
            }
        </>
    )
}

export default Main;