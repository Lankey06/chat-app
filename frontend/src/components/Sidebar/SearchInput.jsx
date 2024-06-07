import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';
import useGetCoversations from "../../hooks/useGetConversations"

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetCoversations();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!search) return;
      if(search.length < 3) {
        return toast.error("Search term must be at least 3 characters long");
      }
      const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
      if(conversation) {
        setSelectedConversation(conversation);
        setSearch("");

      } else toast.error("No user found");
    }


  return (
    
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
      type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs text-black" />
      <button type='submit' className='btn btn-circle btn-sky-500 text-black'>
      <FaSearch className='w-6 h-6 outline-none'/>
        </button>
      </form>
    
  )
}

export default SearchInput
