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

export default function Website (){

return(
<Router>
  <div>
     <Switch>
      
        <Route  history = {history}  exact path = '/' component = {HeaderTwo}/>
        <ProtectedRoute  isAuth = {isAuth} history = {history} exact path = '/slider' component = {Slider}/>
        <Route exact path= "/mycart" component = {Cart}/>
        <Route history = {history} exact path = '/signup'  component ={SignUp}/>
        <Route history = {history} exact path = '/signin'  component ={SignIn}/>
        <Route isAuth = {isAuth} history = {history} exact path = '/header' ><Header/></Route>
        <Route isAuth = {isAuth} proData = {proData} history = {history} exact path = '/products' ><Products/></Route>
      <Route proData = {proData} setProData = {setProData} component = {UploadForm} exact path  = '/uploadform' />
      <Route component = {ImageGrid}exact  path = '/ImageGrid' />
      <Route component = {Modal}exact path = '/modal' />
      
    </Switch>

  </div>
</Router>


)

}