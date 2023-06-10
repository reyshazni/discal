import CustomForm from './components/customForm';
import Names from './context/names.js';
import React, { useState } from 'react';

function App() {
  const [discPrice, setDiscPrice] = useState(0);
  console.log(discPrice)

  return (
    <div className='bg-[#FFFFFE] flex-col mx-auto text-center max-w-[500px] h-screen border-[2px] rounded-[22px]'>
      <p className='font-inter font-bold text-3xl mt-[43px]'>Discount Calculator</p>
      <div className='mx-auto w-[205px]'>
        <p className='font-inter font-bold text-rose-500 mt-[32px] mb-[10px]'>Total discounted price</p>
        <CustomForm type='text' placeholder='Discounted Price' value={parseFloat(discPrice * 1.1)} />
      </div>
      <div className='h-[8px]'></div>
      <Names sumSetter={setDiscPrice} />
    </div>
  );
}

export default App;
 