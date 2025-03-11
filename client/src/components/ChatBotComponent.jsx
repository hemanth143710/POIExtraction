import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const ChatBotComponent = () => {

  const { startChat } = useContext(AppContext);

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side ---------*/}
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Deploy AI-powered <br className='max-md:hidden' /> 
          <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent '>
            conversational agents
          </span> <br className='max-md:hidden' />
          for automated interactions.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Enables businesses to deploy intelligent conversational agents powered by AI <br className='max-sm:hidden' /> 
          for automated and context-aware interactions.
        </p>
        <div>
          <button 
            onClick={startChat} 
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 m-auto hover:scale-105 transition-all duration-700'>
            {/* <img width={20} src={assets.chatBot} alt='' /> */}
            <p className='text-white text-sm'>Start Chat</p>
          </button>
        </div>
      </div>
      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img2} alt="Chat Bot API" />
      </div>
    </div>
  );
}

export default ChatBotComponent;
