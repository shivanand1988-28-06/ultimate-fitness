import React from 'react';

import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){

  function  clickHandler(){
        alert ("hii");
    }
    return (
        <>
        <div style = {{}}>
        <form>
           <h1>UPLOAD YOUR <B>i</B> TEM</h1>
          <input type = "file"/>

        </form>
        </div>
</>

    )
}

export default Upload ;