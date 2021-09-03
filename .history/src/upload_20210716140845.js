import React from 'react';

import { MDBBtn } from 'mdb-react-ui-kit';
function Upload(){

  function  clickHandler(){
        alert ("hii");
    }
    return (
        <>
        <div style = {{textAlign:'center', paddingTop:150}}>
<h1 >UPLOAD YOUR iTEMS HERE</h1>
 <MDBBtn rounded color='success' onClick = {clickHandler} >
 ADD
</MDBBtn>
</div>
</>

    )
}

export default Upload ;