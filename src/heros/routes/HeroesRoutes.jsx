import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Homepage from '../pages/Homepage';
import ChampionPage from '../pages/ChampionPage';

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/home" element={<Homepage />} />
        <Route path="/champion/name/*" element={<ChampionPage />} />

      </Routes>

      <Footer />
    </>
  );
};

export default HeroesRoutes;
