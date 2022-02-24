import React from 'react';
import './card.css';

function Card({ player, refComp, coin, enemy }) {
  return (
    <div className='card'>
      {player ? (
        <div className='player' name='player'></div>
      ) : coin ? (
        <div className='coin' name='coin'></div>
      ) : enemy ? (
        <div className='enemy' name='enemy'></div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Card;
