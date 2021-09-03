import React from 'react';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){
    const [file,setFile] = useState(null);
    const types = ["image.jpeg","image.png"];

      const changeHandler=(e)=>{
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
          setFile(selected)
        }else{
          setFile(null);
          setError("select file of(.png or .jpeg)");
        }
      
       
       
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:50}}>
        
           <h1>UPLOAD YOUR <b style = {{color:'red'}}>i</b>TEM</h1>
          <input style = {{ color:'red',paddingLeft:70}} type = "file"  onChange ={changeHandler}/>
         

    
        </div>
</>
    )
}

export default Upload ;