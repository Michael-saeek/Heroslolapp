//import { useEffect } from 'react'
//import axios from 'axios'


import ScreenChamp from '../components/ScreenChamp';
import Contpositions from '../components/Contpositions';
//import Cards from '../components/Cards';

/* 
Data generica: 
https://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json
Data individual:
https://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion/Aatrox.json

Assets champ
https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'


Splash assets
http://ddragon.leagueoflegends.com/cdn/img/champion/splash/

*/

const Homepage = () => {
  return (
    <section className="background-homecontent flex flex-col relative">

      <section className="flex w-full justify-center relative h-80 overflow-x-scroll overflow-y-hidden ">
     
 

        <ScreenChamp champ="Khazix" number={2} />
        <ScreenChamp champ="Braum" number={2} />
        <ScreenChamp champ="Caitlyn" number={2} />
        <ScreenChamp champ="Fiora" number={2} />
    

 
 
      </section>

      <Contpositions/>

    </section>
  );
};

export default Homepage;
