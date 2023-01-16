import React from "react";

import ModalProvider from "./contexts/modal";
import SampleProvider from "./contexts/sample";
import CartProvider from "./contexts/cart";

//components
import Header from "./components/Header";
import Main from "./components/Main";


function App(){
  return(
    <ModalProvider>
      <SampleProvider>
        <CartProvider>
          <Header/>
          <Main/>
        </CartProvider>
      </SampleProvider>
    </ModalProvider>
  )
}


export default App;