import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex bg-red-400 text-white sm-h-[450px] md:h-[550px] rounded-lg overflow-hidden'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home;