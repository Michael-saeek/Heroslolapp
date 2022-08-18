import React from 'react';

const CardAbilities = ( props ) => {


  const { Aatrox } = props.hero.data

  return (
    /* Abilities comp */
    <div className="flex flex-col relative justify-center items-center font-mono">
      <p>{Aatrox.blurb}</p>

      <div>
        <small> { Aatrox.passive.name } </small>
        <p> {Aatrox.passive.name.description } </p>
      </div>

      <ul className="inline-flex ">
        { Aatrox.spells.map( (item) => {
          return (
          <li>
            <span> {item.id} </span>
            <p> {item.name }</p>
            <p> {item.description}</p>
          </li>
          )
        })}
      </ul>
   
      <div>
        Stats...
      </div>
    </div>
  );
};

export default CardAbilities;
