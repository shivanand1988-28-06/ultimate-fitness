import React from 'react';

class Auth {
      constructor (){
        this.isAuthenticated = false;
      }
  

    signin(cb){
        this.isAuthenticated = true;
        cb();
    }

signout(cb){
  this.isAuthenticated = false;
  cb();
}
isAuthenticated(){
return this.isAuthenticated;
}

}

export default new Auth();