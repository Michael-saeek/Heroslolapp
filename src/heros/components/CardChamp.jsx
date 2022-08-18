import React from 'react';

const CardChamp = () => {
  return (
    <section
      style={{
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${'Aatrox'}_${'0'}.jpg)`,
      }}
      className="bg-neutral h-96 w-screen flex justify-center items-end relative bg-center bg-cover bg-no-repeat bg-fixed "
    >
      <div className="text-center">
        <strong className="titleChamp text-5xl"> Aatrox </strong>

        <ul className="flex my-6 titlePosition text-3xl">
          <li className="px-4 mx-2"> Fighter </li>
          <li className="px-4 mx-2"> Tank </li>
        </ul>
      </div>
    </section>
  );
};

export default CardChamp;
