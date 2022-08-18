import React from 'react';

const CardSkins = (props) => {
  const { Aatrox } = props.hero.data;



  return (
    <div className="bg-neutral flex flex-wrap justify-center overflow-x-hidden w-full relative py-6 h-94">
      {Aatrox.skins.map( (item, index) => {
        return   (
          <div key={index} className="w-52 mx-4 text-white relative text-center font-mono">
          <span className="underline-offset-1">{item.name}</span>
          <img
            className="w-full rounded-lg my-4 bg-contain"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${Aatrox.name}_${
              item.num
            }.jpg`}
            alt="skin"
          />
        </div>
        )
      })}
    
    </div>
  );
};

export default CardSkins;
