import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import SiteHeader from './components/siteheader';
import Home from './views/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="siteheader" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}