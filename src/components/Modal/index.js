import React, {useContext} from "react";
import * as C from './style';
import Sample from "../Sample";
import {MdClose} from 'react-icons/md';
//icons
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
//context
import { ModalContext } from "../../contexts/modal";
import { SampleContext } from "../../contexts/sample";

export default function Modal() {

    const {toggleShowModal} = useContext(ModalContext);
    const {sample, handleSelectedSample} = useContext(SampleContext);

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
        <C.Container>
            <C.Modal>
                <MdClose onClick={() => toggleShowModal(false)} size={22} />
                
                <FiChevronLeft className="prev" size={38} onClick={handlePrev}/>
                <FiChevronRight className="next" size={38} onClick={handleNext}/>
                
                <Sample/>
            </C.Modal>
        </C.Container>
    )
}