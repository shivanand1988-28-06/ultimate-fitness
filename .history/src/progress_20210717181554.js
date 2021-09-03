import React from 'react';
import { projectStorage } from './firebase';
const ProgressBar=({progress})=>{
    return(

        <div>{progress}</div>
    )
}
export default ProgressBar;