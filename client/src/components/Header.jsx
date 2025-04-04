// import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { AppContext } from '../context/AppContext'

// const Header = () => {

//   const { removeBg } = useContext(AppContext)

//   return (
//     <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
//       {/* ---------- Left Side ---------*/}
//       <div>
//           <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
//             Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent '>background</span> from <br className='max-md:hidden' /> images for free.
//           </h1>
//           <p className='my-6 text-[15px] text-gray-500'>Lorem Ipsum is simply dummy text fo the printing and typesetting idustry.<br className='max-sm:hidden' />Lorem Ipsum has been the indystry's standard dummy text ever.</p>
//           <div>
//             <input onChange={ e => removeBg(e.target.files[0])} type='file' accept='image/*' id='upload1' hidden/>
//             {/* <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor='upload1'>
//               <img width={20} src={assets.upload_btn_icon} alt='' />
//               <p className='text-white text-sm'>Upload your image</p>
//             </label> */}
//           </div>
//       </div>
//       {/* --------- Right Side ---------- */}
//       <div className='w-full max-w-md'>
//           <img src={assets.header_img} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Header


import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side ---------*/}
      <div>
        {/* <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Welcome to <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Infyss AI Studio</span>
          <span className='bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent'>Infyss AI Studio</span>
        </h1> */}
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Welcome to <br className='max-md:hidden' />
          <span className='bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-violet-600 to-fuchsia-500'>
            Infyss AI Studio
          </span>
        </h1>

        <style>
        {`
          @keyframes gradientShift {
            0% { background-image: linear-gradient(to right, #7c3aed, #ec4899); } /* Violet to Fuchsia */
            50% { background-image: linear-gradient(to right, #1e40af, #38bdf8); } /* Blue to Sky */
            100% { background-image: linear-gradient(to right, #7c3aed, #ec4899); } /* Back to Violet */
          }

          .animate-gradient {
            animation: gradientShift 10s infinite alternate;
          }
        `}
        </style>

        <p className='my-6 text-[15px] text-gray-500'>
          Infyss AI Studio is a SaaS-based AI applications platform that provides a comprehensive suite of AI-driven APIs and tools, enabling businesses and developers to integrate and deploy cutting-edge artificial intelligence solutions seamlessly.
        </p>
        <p className='text-[15px] text-gray-500'>
          The platform is designed to simplify AI adoption by offering ready-to-use AI services, eliminating the need for extensive model training and infrastructure management.
        </p>
      </div>
      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img2} alt="Infyss AI Studio" />
      </div>
    </div>
  );
};

export default Header;
