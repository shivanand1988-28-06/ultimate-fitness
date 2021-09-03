import React from 'react';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ["image.jpeg","image.png","image.jpg"];
  const selected;
      const changeHandler=(e)=>{
        e.stopPropagation();
        const selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
          setFile(selected);
          setError('');
        }else{
          setFile(null);
          setError("Please select file of(.png or .jpeg)");
        }
      
        console.log(selected);
       
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:50}}>
        
           <h1>UPLOAD YOUR <b style = {{color:'red'}}>i</b>TEM</h1>
          <input style = {{ color:'red',paddingLeft:70}} type = "file"  onChange ={changeHandler}/>
         <div style = {{paddingTop:30}}>{error && <h2>{error}</h2>}</div>
         <div style = {{paddingTop:30}}>{file.name && <h2>{selected.name}</h2>}</div>
    
        </div>
</>
    )
}

export default Upload ;