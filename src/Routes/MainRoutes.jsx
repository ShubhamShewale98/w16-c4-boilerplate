import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import {Products} from "../components/Products";

import { Navbar } from "../components/Navbar";

const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}

  <Navbar/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="/products" element={<Products/>}>

</Route>


  </Routes>
  
  </>;
};
export { MainRoutes };
// Home

// link - "/"