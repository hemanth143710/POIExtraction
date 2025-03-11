import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const ImageVideoEnhancementComponent = () => {
  
  const { enhanceMedia } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [enhancedMedia, setEnhancedMedia] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEnhance = async () => {
    if (!file) return;
    
    const enhanced = await enhanceMedia(file);
    setEnhancedMedia(enhanced);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI-Based <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent '>
            Image & Video Enhancement
          </span>
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Improve resolution, remove noise, and enhance media quality using AI-powered processing.
        </p>
        <div>
          <input 
            onChange={handleFileUpload} 
            type='file' 
            accept='image/*,video/*' 
            id='uploadEnhance' 
            hidden
          />
          <label 
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 m-auto hover:scale-105 transition-all duration-700' 
            htmlFor='uploadEnhance'
          >
            <img width={20} src={assets.upload_btn_icon} alt='' />
            <p className='text-white text-sm'>Upload Image/Video</p>
          </label>
          {file && (
            <button 
              className='ml-4 px-6 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition-all duration-700'
              onClick={handleEnhance}
            >
              Enhance
            </button>
          )}
        </div>

        {enhancedMedia && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-blue-600'>Enhanced Media:</h3>
            <img src={enhancedMedia} alt="Enhanced Output" className='mt-3 w-full rounded-md' />
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.imageEnhancement} alt="AI Image Enhancement" className='mb-4' />
      </div>
    </div>
  );
}

export default ImageVideoEnhancementComponent;
