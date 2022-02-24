// Redux
import { useEffect, useState, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

// Redux Action
import { actionCreators } from '../redux';

// Helper Functions
import checkGameOver from '../helpers/checkGameOver';
import coinCollecting from '../helpers/coinCollecting';
import { getRandomNumbers } from '../helpers/randomNumber';

import Card from './Card';
import './game.css';
import shortTimeCalculation from '../helpers/shortTimeCalculation';

function Game() {
  const coinValue = 100;
  const [gameOver, setGameOver] = useState(false);
  const [coins, SetCoins] = useState(0);

  // Create cells
  const cell = new Array(39).fill(1);
  cell.forEach((_, i) => {
    cell[i] = i + 1;
  });

  const playerAttr = document.getElementsByName('player');
  const coinAttr = document.getElementsByName('coin');
  const enemyAttr = document.getElementsByClassName('enemy');

  const [enemy, setEnemy] = useState([]);
  const [coin, setCoin] = useState([]);

  // Redux
  const dispatch = useDispatch();
  const { scoreAction, gameOverAction, timeAction, coinAction, gameWinAction } =
    bindActionCreators(actionCreators, dispatch);

  // First Time Load
  useEffect(() => {
    window.addEventListener('load', () => {
      playerAttr[0].style.position = 'absolute';
      playerAttr[0].style.left = 0;
      playerAttr[0].style.top = 0;
      playerAttr[0].style.marginLeft = '20px';
      playerAttr[0].style.marginTop = '55px';
    });

    const random = getRandomNumbers(cell, 20);

    setEnemy(random.slice(0, 10));
    setCoin(random.slice(10, 20));
  }, []);

  // Player Movements
  useEffect(() => {
    function handle(event) {
      switch (event.key) {
        case 'ArrowLeft':
          const left = parseInt(playerAttr[0].style.left);
          if (left === 0) {
            return;
          }
          playerAttr[0].style.left = left - 123 + 'px';
          checkGameOver(playerAttr, enemyAttr, setGameOver);
          coinCollecting(playerAttr, coinAttr, SetCoins);
          break;

        case 'ArrowRight':
          const right = parseInt(playerAttr[0].style.left.replace('px', ''));
          if (right === 1107) {
            return;
          }
          playerAttr[0].style.left = right + 123 + 'px';
          checkGameOver(playerAttr, enemyAttr, setGameOver);
          coinCollecting(playerAttr, coinAttr, SetCoins);

          break;
        case 'ArrowUp':
          const up = parseInt(playerAttr[0].style.top);
          if (up === 0) {
            return;
          }
          playerAttr[0].style.top =
            parseInt(playerAttr[0].style.top) - 123 + 'px';
          checkGameOver(playerAttr, enemyAttr, setGameOver);
          coinCollecting(playerAttr, coinAttr, SetCoins);

          break;
        case 'ArrowDown':
          const down = parseInt(playerAttr[0].style.top.replace('px', ''));

          if (down === 369) {
            return;
          }
          playerAttr[0].style.top =
            parseInt(playerAttr[0].style.top) + 123 + 'px';
          checkGameOver(playerAttr, enemyAttr, setGameOver);
          coinCollecting(playerAttr, coinAttr, SetCoins);
          break;
      }
    }
    document.addEventListener('keydown', handle);

    // Score, Coins and GameOver Add to Redux
    scoreAction(coins * coinValue);
    coinAction(coins);
    if (gameOver) {
      gameOverAction(true);
    }
    return () => document.removeEventListener('keydown', handle);
  }, [playerAttr, enemyAttr, coinAttr, coins, gameOver]);

  return (
    <div className='center'>
      <div className='cards'>
        <Card player key={0} />
        {cell.map((item) => {
          if (enemy.indexOf(item) > -1) {
            return <Card key={item} enemy />;
          } else if (coin.indexOf(item) > -1) {
            return <Card key={item} coin />;
          } else {
            return <Card key={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default Game;
