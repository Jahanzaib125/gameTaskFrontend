import { SCORE, GAME_OVER, TIME_ADD, COIN_ADD } from '../constant/constant';

const initialState = {
  id: '6216e6f10a61b2b7ea38dd29',
  time: [],
  name: 'John',
  score: 0,
  coin: 0,
  gameOver: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE:
      return {
        ...state,
        score: action.payload,
      };

    case GAME_OVER:
      return {
        ...state,
        gameOver: action.payload,
      };

    case TIME_ADD:
      return {
        ...state,
        time: [state.time.concat(action.payload)],
      };

    case COIN_ADD:
      return {
        ...state,
        coin: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
