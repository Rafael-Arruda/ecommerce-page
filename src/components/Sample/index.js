import React, {useEffect, useState, useContext} from "react"

import * as C from './style';

//context
import {ModalContext} from '../../contexts/modal';
import { SampleContext } from "../../contexts/sample";

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
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


export default function Sample() {

    const {toggleShowModal} = useContext(ModalContext);
    const {sample, handleSelectedSample} = useContext(SampleContext);
    
    const products = [product1, product2, product3, product4];
    const thumbs = [thumb1, thumb2, thumb3, thumb4];
    
    const [selectedProduct, setSelectedProduct] = useState(products[sample])
    const [selectedThumb, setSelectedThumb] = useState(thumbs[sample].thumb)

    const [screenMobile, setScreenMobile] = useState(false);

    
    useEffect(() => {
        setSelectedProduct(products[sample])
        setSelectedThumb(thumbs[sample])
    }, [sample])
    
    useEffect(() => {
        if(window.screen.width <= 700){
            setScreenMobile(true);
        }else {
            setScreenMobile(false);
        }
    }, [])
    
    function handlePrev() {
        if(sample !== 0) {
            handleSelectedSample(sample - 1)
        }
    }

    function handleNext() {
        if(sample !== 3) {
            handleSelectedSample(sample + 1)
        }
    }

    return(
        <>
            <C.Sample>
            {screenMobile? 
            <div className="mobile-sample">
                <img src={selectedProduct} alt="product"/> 

                <FiChevronLeft className="prev" size={40} onClick={handlePrev}/>
                <FiChevronRight className="next" size={40} onClick={handleNext}/>
            </div>
            :                 
            <img onClick={() => toggleShowModal(true)} src={selectedProduct} alt="product"/>
            }

                <div className="thumbnails">
                    {thumbs.map((thumb, index) => (
                        <div key={index}>
                            {sample === index ?
                            <figure className="selected-thumb">
                                <div className="fade"></div>
                                <img src={thumb} alt="thumbnail"/>
                            </figure> 
                            :
                            <figure onClick={() => handleSelectedSample(index)}>
                                <div className="fade"></div>
                                <img src={thumb} alt="thumbnail"/>
                            </figure>
                            }
                        </div>
                    ))}
                </div>
            </C.Sample>
        </>
    )
}