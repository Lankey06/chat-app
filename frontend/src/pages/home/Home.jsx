import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex bg-black shadow-2xl shadow-[#c8b4f0]	 h-[75%] w-[75%] text-white sm-h-[75%] md:h-[75%] rounded-lg overflow-hidden'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home;