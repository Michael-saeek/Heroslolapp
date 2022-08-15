import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginpage from '../auth/pages/Loginpage'
import HeroesRoutes from '../heros/routes/HeroesRoutes'


const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>

    
                <Route path='/' element={<Loginpage/>} />
                <Route path='/*' element={<HeroesRoutes/>} />


            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter