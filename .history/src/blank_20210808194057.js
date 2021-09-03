import React, { useState,useContext,createContext } from 'react';

export const ProContext = createContext();


 const MyProvider = (props) =>{

    const [proData,setProData]= useState([]);

return(
<ProContext.provider value = {[proData,setProdata]}>
{props.Children}
</ProContext.Provider>
)

};



