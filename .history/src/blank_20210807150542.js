import React, { useState,useContext,createContext } from 'react';


const  Recieve = (props) => {
        return (
            <>
            <h1>{props.proData[0]} <br></br>{props.proData[1]}</h1>
            </>
        )
}

export default Recieve;