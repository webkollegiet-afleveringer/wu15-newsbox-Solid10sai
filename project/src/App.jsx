import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import SiteHeader from './components/siteheader';
import './views/Settings/Settings.jsx';
import Home from './views/home';
import Layout from './components/Layout/Layout'
import Searchbar from './components/Searchbar/Searchbar.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Layout />}/>
          <Route path="/" element={<Home />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
        

          
         
          