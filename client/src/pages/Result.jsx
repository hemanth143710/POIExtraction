import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import data from '../data'

const Result = () => {

  const { resultImage, image, output } = useContext(AppContext);
  console.log('jdsghaj');
  // console.log(data);
  console.log(output);
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>

        {/* -------- Image Container -------- */}
        <div className='flex flex-col gap-8'>
          {/* -------- Left Side (Image) ----- */}
          <div className='w-full'>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img className='rounded-md border w-full' src={image ? URL.createObjectURL(image) : ''} alt="Uploaded" />
          </div>

          {/* ------- Right Side (Data) ------ */}
          <div className='w-full flex flex-col'>
            {output.map((item) => (
              <div key={item.signboard_id} className="signboard mb-10"> {/* Add bottom margin to space out each object */}
                <h2 className='text-xl font-semibold'>{item.poi_name.value}</h2>
                {/* Iterate through all the keys of each item */}
                {Object.entries(item).map(([key, value]) => {
                  // Check if the value is an object that contains both 'value' and 'score' fields
                  if (value && typeof value === 'object' && value.hasOwnProperty('value') && value.hasOwnProperty('score')) {
                    return (
                      <div key={key} className='mb-4'> {/* Add margin after each key-value pair */}
                        <strong>{key.replace('_', ' ').toUpperCase()}:</strong>
                        <div><strong>Value:</strong> {value.value === 'None' ? 'Not available' : value.value}</div>
                        <div><strong>Score:</strong> {value.score}</div>
                      </div>
                    );
                  }
                  // For keys with simple values (like 'pincode')
                  else if (value !== 'None' && value !== undefined) {
                    return (
                      <div key={key} className='mb-4'> {/* Add margin after each key-value pair */}
                        <strong>{key.replace('_', ' ').toUpperCase()}:</strong>
                        {value}
                      </div>
                    );
                  }
                  // For keys with 'None' or undefined values
                  return (
                    <div key={key} className='mb-4'> {/* Add margin after each key-value pair */}
                      <strong>{key.replace('_', ' ').toUpperCase()}:</strong>
                      Not available
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ------ Buttons ------- */}
        {resultImage && (
          <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
            <button className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>
              Try another image
            </button>
            <a href={resultImage} download className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'>
              Download image
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Result