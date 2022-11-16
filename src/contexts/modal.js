import React, {useState, createContext} from "react";

export const ModalContext = createContext({});

function ModalProvider({children}){
    
    const [showModal, setShowModal] = useState(false);

    function toggleShowModal(bool) {
        setShowModal(bool)
    }

    return(
        <ModalContext.Provider value={{showModal, toggleShowModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;