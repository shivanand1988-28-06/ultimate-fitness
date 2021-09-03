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
   const [eRror, setError] =useState();
   function handleInput(e){
      const  name = e.target.name;
      const  value = e.target .value;

      setSignin({...signIn,[name]:value});
        
    }

    const handleSubmit = async(e)=>{
    e.preventDefault();

       setRecord([...reCord,signIn])
         setSignin({
            username:"",
            email:"",
            password:""
         })
       

         try{ 
             const userSignIn =  await userAuth.signInWithEmailAndPassword(signIn.email, signIn.password);
              
            }
        catch(error){
            
      
         setError(error);
       console.log(error);
           
        }
userAuth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              var uid = user.uid;
              var eMail = user.email
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
        
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

               <div><MDBBtn color = "success" > SIGN Out </MDBBtn></div>
              
               <div> {eRror == !null ? <div><h2>{eRror.message}</h2></div> : null}</div>;

        </form>
        </div>
</div>
</>
    )
}
export default SignIn;