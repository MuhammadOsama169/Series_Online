import React, { useState } from 'react'
import logo from '../assets/react.svg'

export const Header = () => {
  const [searchValue,setSearchValue] = useState()

  const handleInputChange = (e) =>{
    setSearchValue(e.target.value)
  }

  console.log(searchValue)

  return (
    <nav className='flex bg-slate-900 text-white '>
      <div className='flex justify-between items-center w-full px-5'>
        <img src={logo} className='px-5'/>

        <input 
          className='flex indent-2 py-4 text-black rounded-sm placeholder-gray-500 px-3 pl-8 outline-none focus:shadow-outline' 
          placeholder='Search Movies' 
          type="search"
          onChange={handleInputChange} 
          value={searchValue}/>

        <div className='flex flex-row gap-5'>
          <button>Home</button>
          <button>About</button>
        </div>

      </div>
    </nav>
  )
}
