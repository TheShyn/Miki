import React, { useState } from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosNotifications} from "react-icons/io"
function Nav() {

  return (
    <header className="bg-white border-b border-slate-200 text-white gap-3 flex items-center justify-end px-5 z-30 flex-1 h-[60px]">
      <div className='bg-white flex items-center px-2 rounded py-1 border border-1 boder-#ccc'>
        <input placeholder='Search...' className='text-black outline-none border-none' type="text" />
        <AiOutlineSearch className='text-black'/>
      </div>
      <div className='text-[20px] text-black'>

        <IoIosNotifications/>
      </div>
    </header>
  );
}

export default Nav;
