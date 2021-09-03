


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
  const [quantity, setQuantity] = useState(null);

   const priceRef = React.useRef();
    const dspnRef = React.useRef();
    const quantityRef = React.useRef();

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
   setPrice(num);

 }

 function handleDescription(e){
   const description = e.target.value;
   setDescription(description);

 }
function handleQuantity(e){
  const num = e.target.value;
        setQuantity(num)   
 };

 function handleSubmit(e){
  e.preventDefault();
  handleDta(price,dspn,quantity);
 priceRef.current.value = "";
 dspnRef.current.value = "";
 quantityRef.current.value = "";
};


  return (
   
    <>
      
     <Header/>
    
   
    <div style = {{paddingTop:100 , paddingLeft:400}}>
     
    <form onSubmit = {handleSubmit}>
      <h1>CHOOSE YOUR <i style ={{color:"red"}}>i</i > MAGE AND <br></br>PROVIDE DETAILS OF YOUR PRODUCT </h1>
      <label>
        <input type ="file" onChange={handleChange} />
        
      </label><br></br>
      <label htmlFor = "price">COMPANY NAME</label>
        <input ref = {copanyRef} type = "text"  onChange = {handleCompany} /><br/>
        <label htmlFor = "price">SUPPLIMENT TYPE</label>
        <input ref = {typeRef} type = 'text' onChange = {handleSupType} /><br/>
      <label htmlFor = "price">PRICE</label>
        <input ref = {priceRef} type = 'number'  onChange = {handleNumber} /><br/>
        <label htmlFor = 'description'>DISCRIPTION</label>
        <input ref = {dspnRef}type = "text" onChange = {handleDescription} /><br></br>
        <label  htmlFor = 'Quantity'>QUANTITY</label>
        <input ref = {quantityRef}type = "number" onChange = {handleQuantity}/>
        
         <input type = "submit" value = 'submit the data'/><br></br>
         {proData[0]} <br></br> {proData[1]} <br></br>{proData[2]}
      
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
