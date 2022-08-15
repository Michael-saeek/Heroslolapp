import {  Route, Routes } from "react-router-dom"
import Navbar from '../components/Navbar'
import Homepage from '../pages/Homepage'

const HeroesRoutes = () => {
  return (
    <>
 
        <Navbar/>
        <Routes>

            <Route path='/home' element={<Homepage/>} />
         


        </Routes>

</>
  )
}

export default HeroesRoutes