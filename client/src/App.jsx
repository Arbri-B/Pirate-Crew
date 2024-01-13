import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Form from './components/Form'
import Dashboard from './views/Dashboard';
import Details from './views/Details';
import Update from './components/Update';

function App() {



  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='/home' element={<Dashboard />} />

        <Route path='/pirate/add' element={<Form />} />

        <Route path="/pirate/:id" element={<Details />} />
        <Route path="/pirate/edit/:id" element={<Update />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
