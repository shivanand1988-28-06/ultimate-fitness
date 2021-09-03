import React, {useState,createContext,useContext} from 'react';

export const ProductContext = createContext();

 const ProductProvider = ({children})=>{
    
    const [proData ,setProData] = useState([]);

    const handleDta=(para1,para2,para3,para4,para5)=>{
      setProData([para1,para2,para3,para4,para5]);
    };

    return(

        <ProductContext.Provider value = {{proData, handleDta}}>
            {children}
        </ProductContext.Provider>

    );
}
export default ProductProvider;