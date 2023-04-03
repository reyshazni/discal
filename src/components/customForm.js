function CustomForm({type, placeholder}) {
  return (
    <form>
        <label className='drop-shadow-xl rounded-full'>
            <input
                type={type}
                placeholder={placeholder}
                className='text-center rounded-xl h-[40px] text-base font-inter'
                />
        </label>
    </form>
  );
}

export default CustomForm;