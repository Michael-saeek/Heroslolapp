import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

const Heroesapp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default Heroesapp;
