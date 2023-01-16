import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext({});

function CartProvider({children}) {

    const [items, setItems] = useState(0);
    const [qty, setQty] = useState(0);

    useEffect(() => {
        let qty = localStorage.getItem("@cartOfStore")
        setItems(parseInt(qty))
    }, [])

    const handleDeleteItem = () => {
        localStorage.removeItem('@cartOfStore')
        setItems(0)
    }

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
        setItems(qty);
    }

    return(
        <CartContext.Provider
            value={{
                items, 
                qty,
                setItems, 
                handleDeleteItem,
                handleAddToCart,
                handleAddQty,
                handleSubQty
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
