import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import App from './App'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route path='/Routes/Home' element={<Home/>} />
        <Route path='/Routes/Favs' element={<Favs/>} />
        <Route path='/Routes/Contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);


