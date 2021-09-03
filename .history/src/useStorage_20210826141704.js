

import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from './firebase';
import './loader';


const useStorage = (file,proData) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images' );

   

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      
      await collectionRef.add({ url, createdAt });
      
      setUrl(url);


      
    });
    
  }, [file]);

  useEffect(()=>{
    const storageRefNew = projectStorage.ref(proData);
    const collectionRefNew = projectFirestore.collection('productdetails');
    const price = proData[0];
    const catagory = proData[1];
    const quantity = proData[2];
      collectionRefNew.add({price,catagory,quantity});
  

  },[proData])

  return { progress, url, error };
}

export default useStorage;