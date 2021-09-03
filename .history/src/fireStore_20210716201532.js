import React from 'react';
import {projectStorage} from './firebase';
import {useState,useEffect} from 'react';


const useStorage=()=>{
    const[url,setUrl] = useState(null);
    const [error,setError] = useState(null);
    const [progress,setProgress]= useState(null);

}