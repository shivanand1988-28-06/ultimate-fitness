import logo from './logo.svg';
import './App.css';
import './signup.css';
import './signin.css';
import './headertwo.css'
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { useHistory } from 'react-router';
import React, {useState,useContext,createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import   Slider from  './slider';
import Header from './header';
import Cart from './mycart';
import SignUp from './signup';
import HeaderTwo from './headertwo';
import SignIn from './signin';
import ProtectedRoute from './protected';
import Products from './products';
import UploadForm from './uploadform';
import ImageGrid from './imagegrid';
import Modal from './modal';


export const ProContext = createContext();


function App(){
  let history = useHistory();
  const [isAuth,setIsAuth] = useState(true); 
  const [proData ,setProData] = useState([]);

 
  
  return(
    <>
   
    <ProContext.Provider value = {proData}>
      <UploadForm/>
      <Products/>
    </ProContext.Provider>
       
   
  
      <Router>
  <div>

     <Switch>
      
        <Route  history = {history}  exact path = '/' component = {HeaderTwo}/>
        <ProtectedRoute  isAuth = {isAuth} history = {history} exact path = '/slider' component = {Slider}/>
        <Route exact path= "/mycart" component = {Cart}/>
        <Route history = {history} exact path = '/signup'  component ={SignUp}/>
        <Route history = {history} exact path = '/signin'  component ={SignIn}/>
        <Route isAuth = {isAuth} history = {history} exact path = '/header' ><Header/></Route>
        <Route isAuth = {isAuth}  history = {history} exact path = '/products' ><Products/></Route>
        
        <Route  component = {UploadForm} exact path  = '/uploadform' />
        
      <Route component = {ImageGrid}exact  path = '/ImageGrid' />
      <Route component = {Modal}exact path = '/modal' />
      
    </Switch>

  </div>
</Router>

</>
 

  )
};

export default App;