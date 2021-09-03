import React from 'react';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){
    const [file,setFile] = useState(null);
  const [newFile,setNewfile] = useState([])
  function  clickHandler(e){
     e.stopPropagation();
        const selected = e.target.files[0];
       setFile(selected)
        setNewfile(file)
        console.log(newFile);
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:50}}>
        
           <h1>UPLOAD YOUR <b style = {{color:'red'}}>i</b>TEM</h1>
          <input style = {{ color:'red',paddingLeft:70}} type = "file"  onChange = {clickHandler} />
         

    
        </div>
</>

    )
}

export default Upload ;