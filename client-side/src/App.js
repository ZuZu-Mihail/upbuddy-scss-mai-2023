import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from './components/AppLayout';
import HomeScreen from './Screens/Home';
import Anything_else from './Screens/Anything_else';
import SideBar from './components/sidebar';
import Despre from './Screens/Despre';
import FAQ from './Screens/FAQ';


function App (){
  // return (

  //   <BrowserRouter>
  //   <SideBar/>
  //     <Routes>
  //       <Route path="/" element={<HomeScreen />} />
  //       <Route path="/anything" element={<Anything_else />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Anything_else />} />
          <Route path='/despre' element={<Despre />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/old_variant' element={<HomeScreen />} />
        </Route>  
      </Routes>
  </BrowserRouter>
  );
}

export default App;
