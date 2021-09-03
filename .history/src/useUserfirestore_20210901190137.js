

import { useState,useEffet, useEffect } from "react";
import { projectFirestore} from "./firebase";

const useUserfirestore = (collection) =>{

const [userDocs , setUserdocs] = useState([]);

useEffect(()=>{

    const unsub = projectFirestore.collection(collection).onSnapshot(snap=>{
        const documents = [];
        snap.forEach(doc=>{
               documents.push({...doc.data(),id: doc.id});
        });
    });

    setUserdocs(documents);
    return () => unsub();
},[collection]
)



}