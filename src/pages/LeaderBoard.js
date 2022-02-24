import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import shortTimeCalculation from '../helpers/shortTimeCalculation';
import './leaderBoard.css';

function LeaderBoard() {
  const time = useSelector((state) => state.user.time[0]);
  const [shortTime, setShortTime] = useState(0);
  useEffect(() => {
    setShortTime(shortTimeCalculation(time.flat(2)));
  }, [shortTime]);

  return (
    <>
      <div className='heading'>
        <h1>Leader Board</h1>
      </div>
      <div>
        <section>
          <div className='container'>
            <div className='card'>
              <div className='content'>
                <div className='imgBx'>
                  <img src={require('../assets/Person1.jpg')} />
                </div>
                <div className='contentBx'>
                  <h3>
                    John
                    <br />
                    <span>Shortest Time</span>
                  </h3>
                </div>
              </div>
              <ul className='sci'>
                <li>
                  <a href='#'>{shortTime} Seconds</a>
                </li>
              </ul>
            </div>
            <div className='card'>
              <div className='content'>
                <div className='imgBx'>
                  <img src={require('../assets/Person2.webp')} />
                </div>
                <div className='contentBx'>
                  <h3>
                    Smith
                    <br />
                    <span>Shortest Time</span>
                  </h3>
                </div>
              </div>
              <ul className='sci'>
                <li>
                  <a href='#'>50 Seconds</a>
                </li>
              </ul>
            </div>
            <div className='card'>
              <div className='content'>
                <div className='imgBx'>
                  <img src={require('../assets/Person3.jpg')} />
                </div>
                <div className='contentBx'>
                  <h3>
                    Andrew
                    <br />
                    <span>Shortest Time</span>
                  </h3>
                </div>
              </div>
              <ul className='sci'>
                <li>
                  <a href='#'>45 Seconds</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LeaderBoard;
