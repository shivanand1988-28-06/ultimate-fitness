import React, { useState,useContext,createContext } from 'react';

export const ProContext = createContext();


 const MyProvider = ({children}) =>{

    const [proData,setProData]= useState([]);

return(
<ProContext.Provider value = {[proData,setProData]} >
      {Children}
</ProContext.Provider>
)

};

export default MyProvider;

