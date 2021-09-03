import {useEffect,useState} from "react";
import { projectFirestore, projectStorage} from "./firebase";


const useProductFirestore=(collection)=>{

const [proDocs, setProdocs] = useState([]);

useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    .onSnapshot((snap)=>{
        const documents = [];
        snap.forEach(doc=>{
            documents.push({...doc.data(), id: doc.id} );
        })
    })
    return ()=>unsub();

},[collection]);


return {proDocs};

}

export default useProductFirestore;
