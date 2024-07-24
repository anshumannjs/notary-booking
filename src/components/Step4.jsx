import React from 'react';
import successIcon from '../assets/success.png';

const Step4 = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto p-6'>
        <img className='mt-[20vh]' width='100px' src={successIcon}></img>
        <h1 className='text-3xl font-bold text-green-300'>SUCCESS</h1>
    </div>
  )
}

export default Step4