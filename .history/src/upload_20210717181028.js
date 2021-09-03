import React from 'react';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import ProgressBar from './progress';
function Upload(){
    const [file,setFile] = useState("");
    const [error,setError] = useState(null);
    const types = ["image/jpeg","image/png","image/jpg"];

      const changeHandler=(e)=>{
       e.preventDefault();
         const selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
          setFile(selected);
          setError('');
        }else{
          setFile(null);
          setError("Please select file of(.png or .jpeg)");
        }
      
        console.log(file);
       
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:50}}>
        <form>
           <h1>UPLOAD YOUR <b style = {{color:'red'}}>i</b>TEM</h1>
          <label>
            <input style = {{ color:'red',paddingLeft:80}} type = "file"  onChange ={changeHandler}/>
          
          </label>
         <div style = {{paddingTop:30}}>{error && <h2>{error}</h2>}</div>
        <div style = {{paddingTop:30}}>{file && <ProgressBar/>}</div>
         </form>
        </div>
</>
    )

export default Upload ;