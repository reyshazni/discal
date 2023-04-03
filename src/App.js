import './App.css';
import CustomForm from './components/customForm';
import CustomName from './components/customName';

function App() {
  return (
    <div className='flex-col mx-auto text-center max-w-[500px]'>
      <p className='font-inter font-bold text-3xl mt-[43px]'>Welcome to Discal!</p>
      <p className='font-inter font-bold text-rose-500 mt-[32px] mb-[10px]'>Total discounted price</p>
      <CustomForm type='text' placeholder='Discounted Price' />
      <CustomName name='Vixell' type='text' placeholder='price' />
    </div>
  );
}

export default App;
 