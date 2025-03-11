import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets'

const VirtualAssistantsComponent = () => {
  
  const { chatWithAssistant } = useContext(AppContext);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    if (!query.trim()) return;

    const assistantResponse = await chatWithAssistant(query);
    setResponse(assistantResponse);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI-Powered <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent '>
            Virtual Assistants
          </span>
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Create advanced AI-driven customer support agents with personalized responses.
        </p>
        <div className='flex flex-col gap-4'>
          <input 
            type='text' 
            placeholder='Ask me anything...' 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='p-3 border rounded-md shadow-sm w-full'
          />
          <button 
            className='px-6 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition-all duration-700'
            onClick={handleChat}
          >
            Chat with Assistant
          </button>
        </div>

        {response && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-green-600'>Assistant Response:</h3>
            <p className='mt-3 text-gray-700'>{response}</p>
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.virtualAssistants} alt="AI Virtual Assistants" className='mb-4' />
      </div>
    </div>
  );
}

export default VirtualAssistantsComponent;
