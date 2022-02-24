import { SCORE, GAME_OVER, TIME_ADD, COIN_ADD } from '../constant/constant';
export const scoreAction = (score) => {
  return (dispatch) => {
    dispatch({
      type: SCORE,
      payload: score,
    });
  };
};

export const gameOverAction = (status) => {
  return (dispatch) => {
    dispatch({
      type: GAME_OVER,
      payload: status,
    });
  };
};

export const timeAction = (time) => {
  return (dispatch) => {
    dispatch({
      type: TIME_ADD,
      payload: time,
    });
  };
};

export const coinAction = (coin) => {
  return (dispatch) => {
    dispatch({
      type: COIN_ADD,
      payload: coin,
    });
  };
};
