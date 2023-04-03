/* eslint-disable no-template-curly-in-string */
import CustomForm from "./customForm";
import iconPlus from '../assets/iconPlus.png'
import { useState } from "react";

function CustomName({name, type, placeholder}) {
  const deleteOrderHandler = (key) => {
    setOrderList(orderList.filter((order) => order.key !== key))
  }

  const [orderList, setOrderList] = useState([<CustomForm type={type} placeholder={placeholder} onClick={deleteOrderHandler} key={0}/>]);

  const addOrderHadler = () => {
    setOrderList(orderList.concat(<CustomForm type={type} placeholder={placeholder} onClick={deleteOrderHandler} key={orderList.length}/>))
  }

  return (
    <div className='w-[80%] mx-auto'>
      <div className="flex flex-row justify-between mb-[14px]">
        <p className='text-[18px] text-left text-rose-500 text-inter'>{name}</p>
        <p className='text-[18px] text-left text-rose-500 text-inter'>Total</p>
      </div>
      {orderList}
      <div className='mx-auto'>
        <button className="border-2 h-[50px] w-[100%] rounded-xl border-dashed" onClick={addOrderHadler}>
            <img src={iconPlus} alt='iconPlus' className='w-[35px] h-[35px] mx-auto'/>
        </button>
      </div>
    </div>
  );
}
  
  export default CustomName;