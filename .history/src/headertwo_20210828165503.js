import React from "react";
import {Redirect} from 'react-router-dom';
import {useState} from 'react';


function HeaderTwo(props){


return(
<div className = "backimg"> 
<div className = "mainhead ">
<h1 className = 'mainh' style={{color : "white"}}>Are You A Memeber Of <span className = 'main'>UF</span> ?</h1><br></br>
<button onClick={()=>{props.history.push('/signin')}}>YES</button> <button onClick={()=>{props.history.push('/signup')}}>NO</button>
<section>
  <div className= "bott">
  <h1 > </h1><br></br>
  <h1></h1><br></br>
  <h1></h1><br></br>
  <h1> </h1><br></br>
  <h1> </h1><br></br>
  
  
  
  </div>
 
</section>



</div>
</div>

)
}


export default HeaderTwo;