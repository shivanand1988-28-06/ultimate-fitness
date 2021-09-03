import React, {useState,createContext,useContext} from 'react';

const [proData ,setProData] = useState([]);

const handleDta=(para1,para2)=>{
  setProData(para1,para2)
}
