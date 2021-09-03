import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from './firebase';
import './loader';
const useStorage = ({file,proData}) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const storageRefNew = projectStorage.ref(proData);
    const collectionRef = projectFirestore.collection('images' );
    const collectionRefNew = projectFirestore.collection('productdetails');


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
    // const price = proData[0];
    // const catagory = proData[1];
    // const quantity = proData[2];
    // storageRefNew.put(proData).on('state_changed' , ()=>{
    //   collectionRefNew.add({price,catagory,quantity});
    // })
  }, [file,proData]);

  // useEffect(()=>{
  //   const ProductRef = projectFirestore.collection("productDetails");

  // },[proData])

  return { progress, url, error };
}

export default useStorage;