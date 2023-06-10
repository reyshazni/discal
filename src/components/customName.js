/* eslint-disable no-template-curly-in-string */
import CustomForm from "./customForm";
import iconPlus from '../assets/iconPlus.png'
import { useState, useEffect } from "react";

function CustomName({name, setter}) {
  const [formList, setFormList] = useState([
    {
      id: Math.random(),
      type: 'number',
      placeholder: 'Item Price',
      value: 0
    }
  ])

  const deleteOrderHandler = (id) => {
    let newList = []
    formList?.map((item) => item.id !== id && newList.push(item))
    setFormList(newList)
  }

  const changeValueHandler = (id, value) => {
    let newList = []
    formList?.map((item) => {
      if(item.id === id){
        const newItem = {
          ...item,
          value: value
        }
        newList.push(newItem)
      } else {
        newList.push(item)
      }
    })
    setFormList(newList)  
  }

  const addOrderHadler = () => {
    const newForm = {
      id: Math.random(),
      type: 'number',
      placeholder: 'Item Price',
      value: 0
    }
    setFormList([...formList, newForm])
    console.log(formList)
    // setOrderList(orderList.concat(<CustomForm type={type} placeholder={placeholder} onClick={deleteOrderHandler} key={orderList.length}/>))
  }

  useEffect(() => {
    let total = 0;
    formList.map(item => total += parseInt(item.value))
    setter(name, total)
  },[formList])

  return (
    <div className='w-[80%] mx-auto'>
      <div className="flex flex-row justify-between mb-[14px]">
        <p className='text-[18px] text-left text-rose-500 text-inter'>{name}</p>
        <p className='text-[18px] text-left text-rose-500 text-inter'>Total</p>
      </div>
      {formList?.map((item) =>  <CustomForm id={item.id} type={item.type} key={item.id} placeholder={item.placeholder} onClick={deleteOrderHandler} onChange={changeValueHandler} value={item.value} />   )}
      {/* {orderList} */}
      <div className='mx-auto'>
        <button className="border-2 h-[50px] w-[100%] rounded-xl border-dashed" onClick={addOrderHadler}>
            <img src={iconPlus} alt='iconPlus' className='w-[35px] h-[35px] mx-auto'/>
        </button>
      </div>
    </div>
  );
}
  
  export default CustomName;