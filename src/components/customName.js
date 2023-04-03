import CustomForm from "./customForm";

function CustomName({name, type, placeholder}) {
    return (
      <div>
        <p className='text-left text-rose-500 text-inter'>{name}</p>
        <CustomForm type={type} placeholder={placeholder}/>
      </div>
    );
  }
  
  export default CustomName;