import React from "react";
import {useState} from 'react';
import Header from './header';
import { MDBBtn } from 'mdb-react-ui-kit';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 


function SignUp(){

  const [userSignup,setUsersignUp] = useState({
        username:"",
        email:"",
        password:"",
        repassword:"",
        mobilenumber:""
      });
      const [reCord,setRecord] = useState([]);

      function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
     
        setUsersignUp({...userSignup,[name]:value})
        console.log(userSignup)
      }

 function handleSubmit(e){
     e.preventDefault();
     
          setRecord([...reCord,userSignup])
          console.log(reCord);
      setUsersignUp({ username:"",
      email:"",
      password:"",
      repassword:"",
      mobilenumber:""});

      // const auth = getAuth();
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     // Signed in 
      //     const user = userCredential.user;
      //     // ...
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
        //   // ..
        // });
      
     
      
 }

  return(
<>
<Header/>
<div className ="container">
 
<div className="signupbg" >


<form  onSubmit = {handleSubmit}>
<div className = "inp" >
  <label> YOUR USERNAME</label><br></br>
<input className = "signform "  name = "username" value = {userSignup.username} autoComplete = "off" onChange = {handleInput}/><br></br>
</div>
<div className = "inp">
<label> YOUR EMAIL</label><br></br>
<input className = "signform "name = "email" value = {userSignup.email}autoComplete = "off" onChange = {handleInput}/><br></br>
</div>
<div className = "inp">
<label>YOUR PASSWORD</label><br></br>
<input className = "signform"name = "password" value = {userSignup.password} autoComplete = "off" onChange ={handleInput}/><br></br>
</div>
<div className = "inp">
<label>YOUR PASSWORD AGAIN</label><br></br>
<input className = "signform" name = "repassword" value = {userSignup.repassword} autoComplete = "off" onChange = {handleInput}/><br></br>
</div>
<div className = "inp">
<label> YOUR CONTACT NUMBER</label><br></br>
<input className = "signform" name = "mobilenomber" value = {userSignup.mobilenumber} autoComplete = "off" onChange = {handleInput}/><br></br>
</div>
<MDBBtn color = "success" type = "submit">SIGN UP</MDBBtn> <MDBBtn color = "success" type = "submit">SIGN IN</MDBBtn>
</form>

</div>

</div>   

</>
  )


  
}

export default SignUp;