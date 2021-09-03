import React from 'react';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){
    const [file,setFile] = useState(null);

  function  clickHandler(e){
     e.stopImmediatePropagation();
        const selected = e.target.files[0];
       setFile(selected)
        
        console.log(file);
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