import React from 'react';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){
    const [file,setFile] = useState(null);
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
          <label><input style = {{ color:'red',paddingLeft:70}} type = "file"  onChange ={changeHandler}/>
          <span>+</span>
          </label>
         <div style = {{paddingTop:30}}>{error && <h2>{error}</h2>}</div>
        
         </form>
        </div>
</>
    )
}

export default Upload ;