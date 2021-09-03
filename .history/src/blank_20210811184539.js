import React, {useState,createContext,useContext} from 'react';

export const ProductProvider = ({children})=>{
    
    const [proData ,setProData] = useState([]);

    const handleDta=(para1,para2)=>{
      setProData(para1,para2)
    };

    return(

        <ProductProvider.Provider value = {{proData,handleDta}}>
            {children}
        </ProductProvider.Provider>

    )
}
