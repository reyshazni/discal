import iconTrash from '../assets/iconTrash.png'
import { useState } from "react";

function CustomForm({type, placeholder, onChange, onClick = null}) {
  const [input, setInput] = useState(0);

  if (!onClick) {
    return (
      <form className="">
        <div className="rounded-xl border-4 mb-[22px]">
          <label className='flex flex-row'>
            <input
                  type={type}
                  placeholder={placeholder}
                  className='px-[24px] text-left rounded-xl h-[50px] w-[100%] text-base font-inter focus:outline-0'
                  onChange={onChange}
                  />  
          </label>
        </div>
      </form>
    )
    } else {
      return (
        <form className="">
          <div className="rounded-xl border-4 mb-[22px]">
            <label className='flex flex-row'>
              <input
                    type={type}
                    placeholder={placeholder}
                    className='px-[24px] text-left rounded-xl h-[50px] w-[100%] text-base font-inter focus:outline-0'
                    onChange={onChange}
                    />  
              <button className="pr-[10px]" onClick={onClick}>
                <img src={iconTrash} alt='icon trash' className=''/>
              </button>
            </label>
          </div>
        </form>
      )  
  }
}

export default CustomForm;