import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AboutMe } from './Pages/AboutMe/AboutMe.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import BlogPost from './Pages/Blogs/BlogPost.jsx'
import { HomePage } from './Pages/Home/HomePage.jsx'
import { Main } from './Apps/AIChef/Main.jsx';
import { TenzieMain } from './Apps/Tenzies/TenzieMain.jsx'
import { HangmanMain } from './Apps/HangMan/HangmanMain.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/chefapp" element={<Main />} />
        <Route path="/tenzies" element={<TenzieMain />} />
        <Route path="/hangman" element={<HangmanMain />} />
        {/* <AboutMe /> */}
      </Routes>
    </BrowserRouter>
  </>,
)
