const ScreenChamp = ({ champ, number = 0 }) => {
  const url = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_${number}.jpg`;

  return (
  
      <div className="inline-flex h-full w-44 relative scaleEffect">
        <img
          className=" bg-no-repeat imageChamp "
          src={url}
          alt=""
        />
      </div>

  );
};

export default ScreenChamp;
