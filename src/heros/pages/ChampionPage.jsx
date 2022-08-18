import { Routes, Route } from 'react-router-dom'
import dataChamp from '../helpers/dataChampion';
import CardChamp from '../components/CardChamp'
import NavigationChampTab from '../components/NavigationChampTab'
import CardSkins from '../components/CardSkins'
import CardAbilities from '../components/CardAbilities'
import CardCombos from '../components/CardCombos'

const ChampionPage = () => {
  const data = dataChamp;
  console.log(data);

  return (
    <>
      <CardChamp/>
      <NavigationChampTab/>
      <Routes>
            
            <Route path="skins" element={<CardSkins hero={data}/>} />
            <Route path="abilities" element={<CardAbilities hero={data}/>}  />
            <Route path="combos" element={<CardCombos />}  hero={data}/>
      </Routes>

            
    </>
   
  );
};

export default ChampionPage;
