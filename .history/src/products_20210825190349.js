

import React  ,{ useState,useContext,createContext } from 'react';
import {  MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardBody, MDBRipple,MDBCardTitle, MDBCardText, MDBCardImage,MDBBtn  } from 'mdb-react-ui-kit';
import Header from "./header";
// import {ProContext} from './App';
import useFirestore from './useFirestore';
import { ProductContext } from './blank';

function Products(props){
  // const godata = useContext(ProContext);
  // console.log(godata);
  const { docs } = useFirestore('images');
  consoleog(proData);
    return(
        <>
         <Header/>
       
        <MDBContainer >
      
           <MDBRow className="md-3"> 
           <MDBCol size='4' className='col-example'>
           {docs && docs.map(doc=>(
       <MDBCard style={{ maxWidth: '22rem' }}>
       <MDBRipple rippleColor='light' rippleTag='div' >
         <MDBCardImage src={doc.url}fluid alt='...' />
         <a>
           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
         </a>
       </MDBRipple>
       <MDBCardBody>
         <MDBCardTitle></MDBCardTitle>
         
         <MDBCardText>
         {/* <h1> {godata}</h1> */}
         </MDBCardText>
         <MDBBtn href='#' >Button</MDBBtn><MDBBtn href='#' >Button</MDBBtn>
       </MDBCardBody>
     </MDBCard>
     ))}
</MDBCol>

     </MDBRow>
    
     </MDBContainer>
        
      
           
      
      </>
    )
}
export default Products;