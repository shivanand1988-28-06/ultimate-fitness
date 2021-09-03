import React from 'react';

import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){

  function  clickHandler(){
        alert ("hii");
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:50}}>
        <form>
           <h1>UPLOAD YOUR <b style = {{color:'red'}}>i</b>TEM</h1>
          <input style = {{ color:'red', bakgroundColor:'success'}} type = "file"/>

        </form>
        </div>
</>

    )
}

export default Upload ;