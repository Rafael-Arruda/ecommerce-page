import React from "react";

import ModalProvider from "./contexts/modal";
import SampleProvider from "./contexts/sample";

//components
import Header from "./components/Header";
import Main from "./components/Main";

function App(){
  return(
    <ModalProvider>
      <SampleProvider>
        <Header/>
        <Main/>
      </SampleProvider>
    </ModalProvider>
  )
}


export default App;