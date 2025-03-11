import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const ImageToVideoComponent = () => {

  const { convertImageToVideo } = useContext(AppContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      convertImageToVideo(file);
    }
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side ---------*/}
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Convert <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent '>
            images into videos
          </span> <br className='max-md:hidden' />
          with AI-driven motion.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Transforms static images into dynamic AI-generated videos, enabling <br className='max-sm:hidden' /> 
          advanced visual storytelling.
        </p>
        <div>
          <input 
            onChange={handleImageUpload} 
            type='file' 
            accept='image/*' 
            id='uploadImageToVideo' 
            hidden
          />
          <label 
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 m-auto hover:scale-105 transition-all duration-700' 
            htmlFor='uploadImageToVideo'>
            <img width={20} src={assets.upload_btn_icon} alt='' />
            <p className='text-white text-sm'>Upload an image</p>
          </label>
        </div>
      </div>
      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className='mb-4 rounded-md shadow-lg' />
        ) : (
          <img src={assets.imageToVideo} alt="Image to Video API" />
        )}
        <p className='text-sm text-gray-400 mt-2'>Your image will be transformed into a video.</p>
      </div>
    </div>
  );
}

export default ImageToVideoComponent;
