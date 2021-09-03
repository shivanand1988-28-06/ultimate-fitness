import React from 'react';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Children, useState} from 'react';

import { MDBBtn } from 'mdb-react-ui-kit';





function Slider({history}){
    const [myCart,setMyCart] = useState(false);
  

    return(
    <>
     
    <div id = "slider">
       <div> <MDBBtn style ={{backgroundColor:'green',  padding :'10px'}}onClick={()=>history.push('/mycart')}> slider </MDBBtn> </div>
       <div> <MDBBtn style ={{backgroundColor:'green',  padding :'10px'}}onClick={()=>history.push('/signup')}> slider </MDBBtn> </div>
      
        <img src= "https://i.postimg.cc/RFtR6P6N/suppliment-image.jpg"></img><br></br>
        <img  src = "[url=https://postimg.cc/zbJW4Fkr][img]https://i.postimg.cc/zbJW4Fkr/suppliment-image.jpg[/img][/url]"></img>
          
   </div>
    </>
    )
};

export default Slider;