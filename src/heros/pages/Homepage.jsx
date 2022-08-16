//import { useEffect } from 'react'
//import axios from 'axios'


import ScreenChamp from '../components/ScreenChamp';
import Contpositions from '../components/Contpositions';

/* 
Data generica: 
https://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json

Assets champ
https://ddragon.leagueoflegends.com/cdn/img/champion/loading/

*/

const Homepage = () => {
  return (
    <section className="background-homecontent flex flex-wrap overflow-y-hidden relative">

      <section className="inline-flex flex-wrap w-11/12 justify-center relative h-80 overflow-y-hidden m-10 ">
        <ScreenChamp champ="Khazix" number={2} />
        <ScreenChamp champ="Braum" number={2} />
        <ScreenChamp champ="Caitlyn" number={2} />
        <ScreenChamp champ="Fiora" number={2} />
        <ScreenChamp champ="Graves" number={2} />


        { /*    
        <ScreenChamp champ="Leona" number={2} />
        <ScreenChamp champ="MasterYi" number={2} />
        <ScreenChamp champ="Mordekaiser" number={2} />
      
        */
        }
   
      </section>

      <Contpositions/>

    </section>
  );
};

export default Homepage;
