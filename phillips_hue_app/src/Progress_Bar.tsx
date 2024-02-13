import { useLocation } from 'react-router-dom';
import React from 'react';
const Progress_Bar = () => {
    const location = useLocation();
    function bar_color(flag:number):string{
        switch (flag) {
            case 1:
                if(location.pathname !== "/"){
                    return "white";
                }
                return "blacK";
            case 2:
                return location.pathname === "/foundBridge" ? "white" : "black";
            default:
              return 'black';
          }
    }
    return (
<div className="flex absolute space-x-16  top-20 w-full h-10"> 
    <div className='ml-24 w-1/4  rounded-2xl border-4 border-white 'style={{backgroundColor :bar_color(1)}}></div>
    <div className='w-1/4 rounded-2xl border-4 border-white' style={{backgroundColor : bar_color(2)}}></div>
    <div className='w-1/4  rounded-2xl border-4 border-white' style={{backgroundColor: bar_color(3)}}></div>
  </div>


            );
}
export default Progress_Bar;