import React, { useState,useContext,createContext } from 'react';

export const ProContext = createContext();


 const MyProvider = ({Children}) =>{

    const [proData,setProData]= useState([]);



return(
<ProContext.Provider value = {proData} >
      {Children}
</ProContext.Provider>
)

};

export default MyProvider;

