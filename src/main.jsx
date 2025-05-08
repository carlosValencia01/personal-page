import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AboutMe } from './Pages/AboutMe/AboutMe.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        {/* <AboutMe /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
