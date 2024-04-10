import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Applicant from './components/Applicant';
function App() {
  return (
    <>
     <BrowserRouter>
     <Home/>
    <Routes>
      <Route path='/registration' element={ <Registration/>}/>
      <Route path='/registrations' element={ <Applicant/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
