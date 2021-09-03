

import React  ,{ useState,useContext,createContext } from 'react';
import {  MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardBody, MDBRipple,MDBCardTitle, MDBCardText, MDBCardImage,MDBBtn  } from 'mdb-react-ui-kit';
import Header from "./header";
import {ProContext} from './blank';






function Products(props){
  const {proData} = useContext(ProContext);
  console.log({proData});
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
          <MDBCardTitle></MDBCardTitle>
          
          <MDBCardText>
          <h1> { proData } </h1>
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