import React from 'react';

import {Route,location,Redirect} from 'react-router-dom';


const ProtectedRoute = ({isAuth,component:Component,...rest})=>{
 
return(

<Route {...rest} render={props=>{
    if(isAuth){
        return <Component {...props} /> && alert ("you are a member of uf");
    }
    else{
        return <Redirect to = {{pathName :"/",state:{from:props.location}}} ></Redirect>&& alert("you are not signed in ");
          
    }
    
}} />

)



}

export default ProtectedRoute;