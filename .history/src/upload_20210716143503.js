import React from 'react';

import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){

  function  clickHandler(){
        alert ("hii");
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:50px}}>
        <form>
           <h1>UPLOAD YOUR <b style = {{color:'red'}}>i</b>TEM</h1>
          <input type = "file"/>

        </form>
        </div>
</>

    )
}

export default Upload ;