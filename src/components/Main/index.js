import React, {useState, useEffect} from "react";

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

//icons
import {FiShoppingCart} from 'react-icons/fi';

const Main = () => {

    const products = [product1, product2, product3, product4]
    const thumbs = [thumb1, thumb2, thumb3, thumb4]
    
    const [sample, setSample] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState(products[sample])
    const [selectedThumb, setSelectedThumb] = useState(thumbs[sample])

    const [qty, setQty] = useState(0);

    useEffect(() => {
        setSelectedProduct(products[sample])
        setSelectedThumb(thumbs[sample])
    }, [sample])

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

    function handleSelectedThumb(index) {
        setSample(index)
    }

    return(
        <C.Container>
            <C.Sample>
                <img src={selectedProduct} alt="product"/>
                
                <div className="thumbnails">
                    {thumbs.map((thumb, index) => (
                        <>
                            {sample === index ?
                            <figure className="selected-thumb">
                                <img src={thumb} alt="thumbnail"/>
                            </figure> 
                            :
                            <figure onClick={() => handleSelectedThumb(index)}>
                                <img src={thumb} alt="thumbnail"/>
                            </figure>
                            }
                        </>
                    ))}
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
                        <button onClick={handleSubQty}>-</button>
                        <span>{qty}</span>
                        <button onClick={handleAddQty}>+</button>
                    </div>
                    <button className="btn-add">
                        <FiShoppingCart size={17} color="#fff"/>
                        Add to cart
                    </button>
                </div>
            </C.Content>
        </C.Container>
    )
}

export default Main;