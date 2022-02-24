import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const reducers = combineReducers({
  user: gameReducer,
});

export default reducers;
