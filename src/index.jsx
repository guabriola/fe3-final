import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import App from './App'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='Favs' element={<Favs/>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path='Detail/:id' element={<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);


