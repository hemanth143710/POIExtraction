import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'


const AddressParserComponent = () => {

  const { parseAddress } = useContext(AppContext);

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side ---------*/}
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Transform <br className='max-md:hidden' /> 
          <span className='bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent '>
            unstructured addresses
          </span> <br className='max-md:hidden' />
          into accurate formats.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Converts unstructured address data into structured formats, ensuring accuracy <br className='max-sm:hidden' /> 
          in location-based services.
        </p>
        <div>
          <input 
            onChange={e => parseAddress(e.target.value)} 
            type='text' 
            placeholder='Enter an address...' 
            className='px-4 py-3 w-full max-w-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
          />
          <button 
            onClick={() => parseAddress(document.querySelector("input").value)} 
            className='mt-4 inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-green-600 to-teal-500 m-auto hover:scale-105 transition-all duration-700'>
            <p className='text-white text-sm'>Parse Address</p>
          </button>
        </div>
      </div>
      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md'>
        <img src={assets.addressParser} alt="Address Parser API" />
      </div>
    </div>
  );
}

export default AddressParserComponent;
