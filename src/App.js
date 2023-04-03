import CustomForm from './components/customForm';
import Names from './context/names.js';
import React, { useState } from 'react';

function App() {
  const [discPrice, setDiscPrice] = useState(0);

  return (
    <div className='bg-[#FFFFFE] flex-col mx-auto text-center max-w-[500px] h-screen border-[4px] rounded-[22px]'>
      <p className='font-inter font-bold text-3xl mt-[43px]'>Discount Calculator</p>
      <div className='mx-auto w-[205px]'>
        <p className='font-inter font-bold text-rose-500 mt-[32px] mb-[10px]'>Total discounted price</p>
        <CustomForm type='text' placeholder='Discounted Price' onChange={(v) => setDiscPrice(v.target.value)}/>
      </div>
      <div className='h-[8px]'></div>
      <Names />
    </div>
  );
}

export default App;
 