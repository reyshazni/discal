import iconTrash from '../assets/iconTrash.png'
import { useState } from "react";

function CustomForm({id, type, placeholder, onChange, onClick = null, value}) {
  const [input, setInput] = useState(0);

  if (!onClick) {
    return (
      <form className="">
        <div className="rounded-xl border-[2px] mb-[22px]">
          <label className='flex flex-row'>
            <input
                  type={type}
                  placeholder={placeholder}
                  className='px-[24px] text-left rounded-xl h-[50px] w-[100%] text-base font-inter focus:outline-0'
                  onChange={(e) => onChange(id, e.target.value)}
                  value={value}
                  />  
          </label>
        </div>
      </form>
    )
    } else {
      return (
        <form className="">
          <div className="rounded-xl border-[2px] mb-[22px]">
            <label className='flex flex-row'>
              <input
                    type={type}
                    placeholder={placeholder}
                    className='px-[24px] text-left rounded-xl h-[50px] w-[100%] text-base font-inter focus:outline-0'
                    onChange={(e) => onChange(id, e.target.value)}
                    value={value}
                    />  
              <button className="pr-[10px]" onClick={() => onClick(id)}>
                <img src={iconTrash} alt='icon trash' className=''/>
              </button>
            </label>
          </div>
        </form>
      )  
  }
}

export default CustomForm;