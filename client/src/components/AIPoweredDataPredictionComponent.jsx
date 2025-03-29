import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const AIPoweredDataPredictionComponent = () => {
  const { processDataFile } = useContext(AppContext);

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side ---------*/}
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Predict future trends <br className='max-md:hidden' /> from your <span className='bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent'>business data</span> <br className='max-md:hidden' /> with AI.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Upload datasets like sales, stock market trends, customer behavior, and more.<br className='max-sm:hidden' />
          Get AI-driven insights for better decision-making.
        </p>
        <div>
          <input onChange={e => processDataFile(e.target.files[0])} type='file' accept='.csv, .xls, .xlsx' id='uploadData' hidden/>
          <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-teal-500 m-auto hover:scale-105 transition-all duration-700' htmlFor='uploadData'>
            <img width={20} src={assets.upload_btn_icon} alt='' />
            <p className='text-white text-sm'>Upload your data file</p>
          </label>
        </div>
      </div>
      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md'>
        <img src={assets.essentialpredictive} alt='AI-Powered Data Prediction' />
      </div>
    </div>
  );
};

export default AIPoweredDataPredictionComponent;