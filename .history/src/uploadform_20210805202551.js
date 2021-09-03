import React, { useState,useContext } from 'react';
import Header from './header';
import ProgressBar from './progressBar';
import ImageGrid from './imagegrid';
import Modal from './modal';
import "./imagegrid.css";
import './modal';

export const datacontext = createContext(data);

const UploadForm = () => {
  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [price,setPrice] = useState(null);
  const [dspn,setDescription] = useState(null);
  const types = ['image/png', 'image/jpeg'];
  const [data, setData] = useState([])



  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
      console.log(file);
    }
  };

 function handleNumber(e){
   const num = e.target.value;
   setPrice(num)
 }

 function handleDescription(e){
   const description = e.target.value;
   setDescription(description);
  
 }

 function handleSubmit(e){
   e.preventDefault();
    setData([price,dspn]);
    console.log(data)
 }

  return (
    <>
     <Header/>
   
    
    <div style = {{paddingTop:100 , paddingLeft:400}}>
     
    <form  onSubmit = { handleSubmit }>
      <h1>CHOOSE YOUR <i style ={{color:"red"}}>i</i > MAGE AND <br></br>PROVIDE DETAILS OF YOUR PRODUCT </h1>
      <label>
        <input type ="file" onChange={handleChange} />
        
      </label><br></br>
      <label htmlFor = "price">PRICE</label>
        <input type = 'number'  onChange = {handleNumber}/><br/>
        <label htmlFor = 'description'>Discription</label>
        <input type = "text" onChange = {handleDescription} />
      <input type = 'submit' value = 'submit'/>

      
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