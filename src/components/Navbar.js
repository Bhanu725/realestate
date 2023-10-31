import React from "react";
import { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handlenav=()=>{
        setNav(!nav);
    }
    return ( 
        <div className="flex justify-between  items-center h-24 p-4 max-w-[1240px] mx-auto text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REAL ESATE</h1>
            <ul className="hidden md:flex">
                <li className="p-4">HOME</li>
                <li className="p-4">BUY</li>
                <li className="p-4">SELL</li>
                <li className="p-4">RENT</li>
                <li className="p-4">PROFILE</li>
            </ul>
            <div onClick={handlenav} className="block md:hidden">
                {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
                {/* <AiOutlineMenu size={20}/> */}
            </div>
            <div className={!nav?"fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] p-4 ease-in-out duration-500":"fixed left-[-100%]"} >
            <h1 className="w-full p-4 text-3xl font-bold text-[#00df9a]">REAL ESATE</h1>
                <ul className="pt-4 pl-2 pb-4 pr-4">
                <li className="p-4 border-b border-gray-600">HOME</li>
                <li className="p-4 border-b border-gray-600">BUY</li>
                <li className="p-4 border-b border-gray-600">SELL</li>
                <li className="p-4 border-b border-gray-600">RENT</li>
                <li className="p-4">PROFILE</li>  
                </ul> 
             </div> 
        </div>
     );
}
 
export default Navbar;