import Game from './components/Game';
import './app.css';
import { useSelector } from 'react-redux';
import Timer from './components/Timer';
import LeaderBoard from './pages/LeaderBoard';
import Error from './pages/Error';
import { GameOver } from './pages/GameOver';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const sc = useSelector((state) => state.user.score);

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='header'>
                <div className='info'>
                  <span>Score: {sc}</span>
                  <Timer />
                  <Link to='/leaderboard' className='link'>
                    Leader Board
                  </Link>
                </div>
              </div>
              <div className='gameboard'>
                <Game />
              </div>
            </>
          }
        />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='/gameover' element={<GameOver />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
