import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AboutMe } from './Pages/AboutMe/AboutMe.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import BlogPost from './Pages/Blogs/BlogPost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* <AboutMe /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
