import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

function Timer() {
  const time = 50;
  const [seconds, setSeconds] = useState(time);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gameOverAction, timeAction } = bindActionCreators(
    actionCreators,
    dispatch
  );
  let gameover = useSelector((state) => state.user.gameOver);
  let gameWin = useSelector((state) => state.user.coin);
  const id = useSelector((state) => state.user.id);
  let timer;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(async () => {
    const { data } = await axios.get(
      'https://game-task-app.herokuapp.com/api/v1/users/'
    );
    const time = data.user[0].time;

    timeAction(time);
  }, []);
  useEffect(async () => {
    //Game Over
    if (gameover) {
      navigate('/gameover');
    }
    //Game Win Logic
    else if (gameWin >= 10) {
      timeAction(time - seconds);
      await axios
        .put('https://game-task-app.herokuapp.com/api/v1/users/' + id, {
          time: time - seconds,
        })
        .catch((err) => console.log(err));
      navigate('/leaderboard');
    }
  }, [gameover, gameWin]);

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    // Game Over Time Out
    if (seconds === 0) {
      clearInterval(timer);
      gameOverAction(true);
    }

    return () => clearInterval(timer);
  });

  return <div>Timmer: {seconds}</div>;
}

export default Timer;
