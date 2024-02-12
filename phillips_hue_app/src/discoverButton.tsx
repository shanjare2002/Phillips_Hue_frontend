// DiscoverButton.tsx
import React from 'react';
import {useNavigate} from 'react-router-dom'
const path: string = "loading";

interface button{
  label:String;
}

const HomeScreen: React.FC <button> = ({label}) => {
  const navigate = useNavigate();
  return (
    <div className=" flex h-1/2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2items-center flex justify-center text-xxl">  
    <button onClick= {(event) => {
      
          console.log(event);
          navigate('/' + path);}} className='cyan-500 text_main 50 border-[5px] text-white rounded-full font-bold border-100 border-white hover:border-[white] hover:text-black w-1/4  h-1/4 hover:bg-white focus:outline-none focus:ring focus:border-blue-300' >
    {label}
    
  </button> </div>

  );
};
export default HomeScreen;
