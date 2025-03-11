import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const TextToAudioComponent = () => {

  const { convertTextToAudio } = useContext(AppContext);
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);

  const handleConvert = async () => {
    if (text.trim() === '') return;
    
    const audio = await convertTextToAudio(text);
    setAudioUrl(audio);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side ---------*/}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Transform <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent '>
            text into speech
          </span> <br className='max-md:hidden' />
          with AI-powered voices.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Converts written content into natural-sounding speech, useful for audiobooks, <br className='max-sm:hidden' /> 
          voice assistants, and accessibility applications.
        </p>
        <textarea
          className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
          rows='4'
          placeholder='Enter text here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          className='mt-4 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-full hover:scale-105 transition-all duration-700'
          onClick={handleConvert}
        >
          Convert to Audio
        </button>
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.header_img2} alt="Text to Audio API" className='mb-4' />
        {audioUrl && (
          <audio controls className='mt-4'>
            <source src={audioUrl} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
}

export default TextToAudioComponent;
