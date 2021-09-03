import React from 'react';

import { Form,MDBBtn } from 'mdb-react-ui-kit';
function Upload(){

  function  clickHandler(){
        alert ("hii");
    }
    return (
        <>
        <label class="form-label" for="customFile">Default file input example</label>
<input type="file" class="form-control" id="customFile" />
</>

    )
}

export default Upload ;