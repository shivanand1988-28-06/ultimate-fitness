import React, {useState,createContext,useContext} from 'react';

export const ProductContext = createContext();

 const ProductProvider = ({children})=>{
    
    const [proData ,setProData] = useState("i am proData");

    const handleDta=(para1)=>{
      setProData(para1)
    };

    return(

        <ProductContext.Provider value = {[proData, handleDta]}>
            {children}
        </ProductContext.Provider>

    )
}
export default ProductProvider;