import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from './Pages/Login/index';


const Routes = () =>{
    return(
        <BrowserRouter>
          <Route path="/" element={<Login/>}></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
        </BrowserRouter>
    )
    
}
export default Routes