import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div>
      <form className='flex items-center gap-2'>
      <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
      <button type='submit' className='btn btn-circle btn-sky-500 text-white'>
      <FaSearch className='w-6 h-6 outline-none'/>
        </button>
      </form>
    </div>
  )
}

export default SearchInput
