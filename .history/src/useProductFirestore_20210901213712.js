import {useEffect,useState} from "react";
import { projectFirestore, projectStorage} from "./firebase";


const useProductfirestore=(collection)=>{

const [proDocs, setProdocs] = useState([]);

useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    .onSnapshot((snap)=>{
        const documents = [];
        snap.forEach(doc=>{
            documents.push({...doc.data(), id: doc.id} );
        });
        setProdocs(documents);
    })
    return ()=>unsub();

},[collection]);


return {proDocs};

}

export default useProductfirestore;