import React from 'react';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import { useEffect } from 'react'; 
import {useNavigate} from 'react-router-dom'
const fetchHubData = async () => {
    try{
        const response = await axios.get('http://localhost:8080/api/hubAddress');
        if(response.status === 200){
            console.log(response.data);
        if (response.data.trim() !== '') {
            return true;
        } else {
            return false;
        }
        }
    }
    catch(error){
        alert("Server Error");
    }
}
const path_success:string = "foundBridge";

const Loading: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
            const fetchData = async () => {
              try {
                const hasData = await fetchHubData();
                if (hasData) {
                  navigate('/' + path_success);
                } 
              } catch (error) {
    
              }
            };
        
            fetchData();
          }, [navigate]);
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
