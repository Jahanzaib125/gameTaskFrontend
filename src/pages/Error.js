import React from 'react';
import './error.css';

function Error() {
  return (
    <>
      <div className='error'>
        <div className='hd1'>404</div>
        <div className='hd2'>Not Found</div>
        <p>The resource requested could not be found on this server!</p>
      </div>
    </>
  );
}

export default Error;
