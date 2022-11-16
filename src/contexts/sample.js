import React, {createContext, useState} from "react";

export const SampleContext = createContext({});

function SampleProvider({children}) {
    
    const [sample, setSample] = useState(0);

    function handleSelectedSample(index) {
        setSample(index)
    }
    
    return(
        <SampleContext.Provider value={{sample, handleSelectedSample}}>
            {children}
        </SampleContext.Provider>
    )
}

export default SampleProvider;