import React from "react";

import * as C from './style';

//images
import product1 from '../../images/image-product-1.jpg';
import product2 from '../../images/image-product-2.jpg';
import product3 from '../../images/image-product-3.jpg';
import product4 from '../../images/image-product-4.jpg';

import thumb1 from '../../images/image-product-1-thumbnail.jpg';
import thumb2 from '../../images/image-product-2-thumbnail.jpg';
import thumb3 from '../../images/image-product-3-thumbnail.jpg';
import thumb4 from '../../images/image-product-4-thumbnail.jpg';


const Main = () => {
    return(
        <C.Container>
            <C.Sample>
                <img src={product1} alt="product"/>
                
                <div className="thumbnails">
                    <img src={thumb1} alt='thumb'/>
                    <img src={thumb2} alt='thumb'/>
                    <img src={thumb3} alt='thumb'/>
                    <img src={thumb4} alt='thumb'/>
                </div>
            </C.Sample>
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
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <button className="btn-add">Add to cart</button>
                </div>
            </C.Content>
        </C.Container>
    )
}

export default Main;