import React from 'react';
import Header from './header';
import {useState} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {userAuth} from "./firebase" ;
import { useHistory } from 'react-router';


function SignIn (){
   const history = useHistory();
    let [signIn,setSignin] = useState({
        username:"",
        email:"",
        password:""
    })
    const [reCord,setRecord]= useState([]);
   const [eRror, setError] =useState(null);
   const [eMail,setEmail] = useState([]);
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
             const userSignIn =  await userAuth.signInWithEmailAndPassword(signIn.email, signIn.password)
            //  .then((user)=>setEmail(user.user.email));
  
            }
        catch(error){
            setError(error);
      
                }
   
         const user = userAuth.currentUser;  
           
        if (user){
            history.push("./products");
            setEmail(user.email);
            console.log(user.email);
        };


     }

     const handleSignout = (e)=>{
       userAuth.signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
     }
          
    return(
        <>
        <Header eMail = {eMail}/>
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

               <div><MDBBtn color = "success" onClick = {handleSignout}> SIGN Out </MDBBtn></div>
              
               {/* <div> {eRror == !null ? <div><h2>{eRror.message}</h2></div> : null}</div> */}

        </form>
        </div>
</div>
</>
    )
}
export default SignIn;