


import React, { useState,useContext,createContext } from 'react';
import Header from './header';
import ProgressBar from './progressBar';
import ImageGrid from './imagegrid';
import Modal from './modal';
import "./imagegrid.css";
import './modal';
import { ProductContext } from './blank';



const UploadForm = () => {

  const  {proData}  = useContext(ProductContext);
   const { handleDta }= useContext(ProductContext);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [price,setPrice] = useState(null);
  const [dspn,setDescription] = useState(null);
  
  const types = ['image/png', 'image/jpeg'];
  const [imgInfo,setImgInfo] = useState(null);

 
  const handleChange = (e) => {
    let selected = e.target.files[0];
      setImgInfo(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
  
    }
  };

 function handleNumber(e){
   const num = e.target.value;
   setPrice(num)
 }

 function handleDescription(e){
   const description = e.target.value;
   setDescription(description);
  console.log(dspn);
 }

function handleClick(e){

    handleDta(price,dspn,imgInfo);

}
function handleSubmit(e){
  e.preventDefault();
return {proData}

}

 

  return (
   
    <>
      
     <Header/>
    
   
    <div style = {{paddingTop:100 , paddingLeft:400}}>
     
    <form onSubmit = {handleSubmit}>
      <h1>CHOOSE YOUR <i style ={{color:"red"}}>i</i > MAGE AND <br></br>PROVIDE DETAILS OF YOUR PRODUCT </h1>
      <label>
        <input type ="file" onChange={handleChange} />
        
      </label><br></br>
      <label htmlFor = "price">PRICE</label>
        <input type = 'number'  onChange = {handleNumber}/><br/>
        <label htmlFor = 'description'>Discription</label>
        <input type = "text" onChange = {handleDescription} /><br></br>
        <button onClick={handleClick}>otherDetails</button>
        
      <input type = "submit" value = 'submit'>submit the data</input><br></br>
  {proData}
      
    </form>
    <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </div>
    <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    
      
   
     
    </>
  
  );
}

export default UploadForm;
