import React from 'react'
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BiDumbbell } from "react-icons/bi";
import RubberBand from 'react-reveal/RubberBand';
import { MDBBtn, MDBIcon  } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router';
import Bounce from 'react-reveal/Bounce';
import { useDeprecatedAnimatedState } from 'framer-motion';
import useProductfirestore from './useProductFirestore';
import {userAuth} from './firebase';

function Header (props){
    console.log(props.curUser);
    const handleSignout = (e)=>{
        userAuth.signOut().then(() => {
        
           }).catch((error) => {
             console.log(error);
           });
      }

const history = useHistory();

    return(
        <>
        <div  id = "first" className= "grid" >

        <RubberBand><div id = "firstchi"><BiDumbbell color='white' size='10.5rem' ></BiDumbbell><p >ultimate fitness</p></div></RubberBand>
        <Bounce><div id = "secondchi"><h1 style ={{fontSize:'70px',wordSpacing:'70px'}}>ULTIMATE  FITNESS</h1><h3>Ultimate Way To Be Fit.</h3></div></Bounce>
        <Bounce><div id = "thirdchi" ><MDBBtn  outline rounded color='danger' onClick = {()=>history.push('/signup')} >SIGN UP</MDBBtn>
        <MDBBtn  outline rounded color='danger' onClick = {()=>history.push('/signin')} >SIGN IN</MDBBtn></div><MDBIcon size='2x'fas icon="shopping-cart" />
         <MDBBtn onClick = {handleSignout}>LOGOUT {props.curUser}</MDBBtn>
      </Bounce>
       

    </div>
      
</> 

    )
};
export default Header;