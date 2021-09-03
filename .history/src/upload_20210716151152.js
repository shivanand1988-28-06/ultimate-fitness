import React from 'react';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){


  function  clickHandler(e){
        const selected = e.target.files[0];
       
        
        console.log(selected)
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:50}}>
        <form>
           <h1>UPLOAD YOUR <b style = {{color:'red'}}>i</b>TEM</h1>
          <input style = {{ color:'red',paddingLeft:70}} type = "file" onClick = {clickHandler}/>

        </form>
        </div>
</>

    )
}

export default Upload ;