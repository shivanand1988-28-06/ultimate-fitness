import React, { useState,useContext,createContext } from 'react';
import Products from './products';


const  Recieve = (props) => {
   
        return (
            <>

            <Products proData = {props.proData} dspn = {props.dspn} hi = "hi"/>
            </>
        )
}

export default Recieve;