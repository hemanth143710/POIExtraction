import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
const ContentGenerationComponent = () => {
  
  const { generateContent } = useContext(AppContext);
  const [inputText, setInputText] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    if (inputText.trim() === '') return;

    const content = await generateContent(inputText);
    setGeneratedContent(content);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI-Powered <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent '>
            Content Generation
          </span>
          <br className='max-md:hidden' /> for seamless creativity.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Automatically generate high-quality text, articles, or marketing copy using AI <br className='max-sm:hidden' />
          to enhance productivity.
        </p>
        <div className='flex gap-3'>
          <input
            type='text'
            className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            placeholder='Enter a topic or keywords...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button 
            className='px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:scale-105 transition-all duration-700'
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>

        {generatedContent && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-purple-600'>Generated Content:</h3>
            <p className='text-gray-700 mt-2'>{generatedContent}</p>
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.contentGeneration} alt="AI Content Generation" className='mb-4' />
      </div>
    </div>
  );
}

export default ContentGenerationComponent;
