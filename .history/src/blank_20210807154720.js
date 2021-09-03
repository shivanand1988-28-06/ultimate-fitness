import React, { useState,useContext,createContext } from 'react';
import Products from './products';


const  Recieve = (props) => {
    console.log(props.proData)
        return (
            <>

            <Products proData = {props.proData} dspn = {props.dspn} />
            </>
        )
}

export default Recieve;