import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from './firebase';
import './loader';
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images' );
    const collectionRefNew = projectFirestore.collection('product_details');
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

  // useEffect(()=>{
  //   const ProductRef = projectFirestore.collection("productDetails");

  // },[proData])

  return { progress, url, error };
}

export default useStorage;