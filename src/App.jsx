/*
:نستطيع تنزيل المكتبات التي سنتاجها في المشروع مرة واحدة عن طريق كتابة
npm i bootstrap axios react-router-dom react-hook-form
react-router-dom ==> spa
react toastify
*/
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Create from "./pages/user/Create.jsx"
import About from "./pages/about/About.jsx"
import Home from './pages/home/Home.jsx'
function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />      
        <Route path='/users' element={<Home/>} />
        <Route path='/add' element={<Create/>} />
        <Route path='/about' element={<About/>} />

      </Routes>
      </div>
     <Footer/>
    </>
  )
}

export default App