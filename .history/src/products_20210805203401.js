import React from 'react';
import {  MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardBody, MDBRipple,MDBCardTitle, MDBCardText, MDBCardImage,MDBBtn  } from 'mdb-react-ui-kit';
import Header from "./header";




function Products(props){
    
  

    return(
        <>
         <Header/>
        <MDBContainer >
            <MDBRow className="md-3">
            <MDBCol size='4' className='col-example'>
        <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBRipple rippleColor='light' rippleTag='div' >
          <MDBCardImage src="https://i.postimg.cc/RFtR6P6N/suppliment-image.jpg" fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href='#' >Button</MDBBtn><MDBBtn href='#' >Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
</MDBCol>

      </MDBRow>
      </MDBContainer>
      
      </>
    )
}
export default Products;