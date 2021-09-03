import React, { useState,useContext,createContext } from 'react';

export const ProContext = createContext();


 const MyProvider = () =>{

    const [proData,setProData]= useState([]);

return(
<ProContext.Provider value = {[proData,setProData]} >
      {props.Children}
</ProContext.Provider>
)

};

export default MyProvider;

