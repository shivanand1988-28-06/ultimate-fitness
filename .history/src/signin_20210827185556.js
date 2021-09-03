import React from 'react';
import Header from './header';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {userAuth} from "./firebase" ;

function SignIn (){

    let [signIn,setSignin] = useState({
        username:"",
        email:"",
        password:""
    })
    const [reCord,setRecord]= useState([]);

   function handleInput(e){
      const  name = e.target.name;
      const  value = e.target .value;

      setSignin({...signIn,[name]:value});
        
    }

    function handleSubmit(e){
    e.preventDefault();

       setRecord([...reCord,signIn])
         setSignin({
            username:"",
            email:"",
            password:""
         })
       

         try{ 
             const userSignIn = userAuth.signInWithEmailAndPassword(signIn.email, signIn.password);
             console.log(userSignIn);
            }
        catch(error){
            
        console.log(error)

            
        }
        
     }

    return(
        <>
        <Header/>
        <div classsName = "container">
        <div className = "signinbg">
        <form onSubmit = {handleSubmit}>
               <div className = "signininp">
                <label htmlFor="username" > USERNAME </label> 
               <input className = "signinform"  name = "username" value = {signIn.username} autoComplete="off" onChange={handleInput}></input>
               </div>
               <div className = "signininp">
                   <label htmlFor = "email" > EMAIL </label>
                   <input className = "signinform"  name ="email" value = {signIn.email} autoComplete = "off"  onChange = {handleInput}></input>
               </div>
               <div className = "signininp">
                  <label htmlFor = "password" > PASSWORD </label>
                  <input className = "signinform"  name= "password" value = {signIn.password} autoComplete ="off"  onChange = {handleInput}></input>

               </div>
               <div><MDBBtn color = "success" type = "submit"> SIGN IN </MDBBtn></div>


        </form>
        </div>
</div>
</>
    )
}
export default SignIn;