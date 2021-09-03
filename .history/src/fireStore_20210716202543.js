import React from 'react';
import {projectStorage} from './firebase';
import {useState,useEffect} from 'react';


const useStorage=(file)=>{
    const[url,setUrl] = useState(null);
    const [error,setError] = useState(null);
    const [progress,setProgress]= useState(null);

    useEffect(()=>{
   const StorageRef = projectStorage.ref(file.name);

   StorageRef.put().on('state_changed',(snap)=>{
       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
       setProgress(percentage);
   }

   )

},[file])

}