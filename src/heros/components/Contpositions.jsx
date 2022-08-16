import React from 'react';
import Positionbot from '../../assets/positions/positionbot.png';
import Positionjungle from '../../assets/positions/positionjg.png';
import Positionmid from '../../assets/positions/positionmid.png';
import Positionsupport from '../../assets/positions/positionsup.png';
import Positiontop from '../../assets/positions/positiontop.png';

const Contpositions = () => {
  return (
    <div className="hero w-full bg-base-200 bg-fixed relative flex justify-center items-center" 
    style={{backgroundImage: "url(https://i.pinimg.com/originals/62/9d/15/629d152f62ef677770d60e71c0e1b970.jpg)"}}>
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col">
          <div className="inline-flex justify-center items-center mb-8">
            <img className="mx-2 cursor-pointer duration-100 hover:border-2 hover:border-indigo-500 rounded" src={Positionjungle} alt="position" />
            <img className="mx-2 cursor-pointer duration-100 hover:border-2 hover:border-indigo-500 rounded" src={Positionmid} alt="position" />
            <img className="mx-2 cursor-pointer duration-100 hover:border-2 hover:border-indigo-500 rounded" src={Positionbot} alt="position" />
            <img className="mx-2 cursor-pointer duration-100 hover:border-2 hover:border-indigo-500 rounded" src={Positionsupport} alt="position" />
            <img className="mx-2 cursor-pointer duration-100 hover:border-2 hover:border-indigo-500 rounded" src={Positiontop} alt="position" />
          </div>

          <h1 className="text-5xl font-bold">Escoja su posición favorita</h1>
          <p className="py-6">
            En nuestra pagina usted podrá aprender desde zero con total claridad
            y transparencia a como usar su campeón favorito.
          </p>
          <button className="btn btn-primary">Comenzar</button>
        </div>
      </div>
    </div>
  );
};

export default Contpositions;
