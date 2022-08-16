import {  Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'
import Homepage from '../pages/Homepage'

const HeroesRoutes = () => {
  return (
    <>
 
        <Navbar/>
        <Routes>

            <Route path='/home' element={<Homepage/>} />
         


        </Routes>

        <Footer/>

</>
  )
}

export default HeroesRoutes