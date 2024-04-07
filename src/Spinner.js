import React from 'react'
import spin from './1480.gif';

const Spinner =()=> {
    return (
      <div className='text-center'>
        <img src={spin} alt="Loading" />
      </div>
    )
}

export default Spinner;
