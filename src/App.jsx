import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import PageNotFound from './pages/page-not-found'
import Logout from './pages/logout';



export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
   
  )
}

