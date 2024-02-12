import React from 'react';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import { useEffect } from 'react';
var tries: number = 0;
import {useNavigate} from 'react-router-dom'
const fetchHubData = async () => {
    try{
        const response = await axios.get('http://localhost:8080/hubAddress');
        if(response.status === 200){
            console.log(response.data);
            return response.data;
        }
    }
    catch(error){
        alert("Server Error")
    }
}
const Loading: React.FC = () => {
    // const navigate = useNavigate();
    // const navigatePage =async () => {
    //     if(await fetchHubData()){
    //             navigate('/foundBridge');
    //     }
    //     else{

    //     }
    // }
    useEffect(() => {
        tries += 1;
        if(tries < 2){ 
            fetchHubData();
        }
    },[]);
  return (
    <>
    <p className='absolute top-1/3 left-1/2  transform -translate-x-1/2 -translate-y-1/2  font-helvetica font-bold text-5xl text-white '> Discovering Hue  .......... </p>
    <div className=' justify-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
    <BarLoader color="#ffffff" height={30} width={200} className= 'mb-20'  />
    <img src = "src\assets\Philips-Hue-Bridge-2.0.webp"  height={5} width={200} ></img> 
    </div>  
    
    </>
  );
}

export default Loading;
