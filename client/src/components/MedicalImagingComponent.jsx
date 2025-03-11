import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const MedicalImagingComponent = () => {

  const { analyzeMedicalImage } = useContext(AppContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setSelectedFile(file);
    const result = await analyzeMedicalImage(file);
    setAnalysisResult(result);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI-Powered <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent '>
            Medical Imaging
          </span>
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          AI-assisted medical image analysis for enhanced diagnosis and pattern recognition.
        </p>
        <div className='flex flex-col gap-4'>
          <input 
            type='file' 
            accept='image/*' 
            id='uploadMedical' 
            hidden 
            onChange={handleFileUpload}
          />
          <label 
            htmlFor='uploadMedical' 
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 transition-all duration-700'
          >
            Upload Medical Image
          </label>
        </div>

        {analysisResult && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-blue-600'>Analysis Result:</h3>
            <p className='mt-3 text-gray-700'>{analysisResult}</p>
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.header_img2} alt="AI Medical Imaging" className='mb-4' />
      </div>
    </div>
  );
}

export default MedicalImagingComponent;
