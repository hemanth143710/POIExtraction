// import React from 'react'
// import { assets } from '../assets/assets'

// const Steps = () => {
//   return (
//     <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
//         <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background image in seconds</h1>
//         <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

//            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
//             <img className='max-w-9' src={assets.upload_icon} alt="" />
//             <div>
//                 <p className='text-xl font-medium' >Upload image</p>
//                 <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br /> This is a demo..</p>
//             </div>
//            </div>

//            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
//             <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
//             <div>
//                 <p className='text-xl font-medium' >Remove background</p>
//                 <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br /> This is a demo..</p>
//             </div>
//            </div>

//            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
//             <img className='max-w-9' src={assets.download_icon} alt="" />
//             <div>
//                 <p className='text-xl font-medium' >Download image image</p>
//                 <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br /> This is a demo..</p>
//             </div>
//            </div>

//         </div>
//     </div>
//   )
// }

// export default Steps

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { assets } from '../assets/assets';

const Offerings = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const offerings = [
    {
      title: "Chat Bot API",
      description: "Enables businesses to deploy intelligent conversational agents powered by AI for automated and context-aware interactions.",
      path: "/chat-bot-api",
      image: assets.chatBot
    },
    {
      title: "Image to Address API",
      description: "Uses computer vision to extract and interpret address details from images for location-based applications.",
      path: "/image-to-address-api",
      image: assets.imageToAddress
    },
    {
      title: "Address Parser API",
      description: "Converts unstructured address data into structured formats, ensuring accuracy in location-based services.",
      path: "/address-parser-api",
      image: assets.addressParser
    },
    {
      title: "Image to Video API",
      description: "Transforms static images into dynamic AI-generated videos, enabling advanced visual storytelling.",
      path: "/image-to-video-api",
      image: assets.imageToVideo
    },
    {
      title: "Text to Audio API",
      description: "Converts written content into natural-sounding speech, useful for audiobooks, voice assistants, and accessibility applications.",
      path: "/text-to-audio-api",
      image: assets.textToAudio
    },
    {
      title: "Trade Suite for Stock API",
      description: "Provides AI-powered stock market analytics, trading insights, and financial decision-making support.",
      path: "/trade-suite-api",
      image: assets.tradeSuite
    },
    {
      title: "AI-Powered Content Generation",
      description: "Automatically generate high-quality text, articles, or marketing copy.",
      path: "/content-generation",
      image: assets.contentGeneration
    },
    {
      title: "AI-Based Image & Video Enhancement",
      description: "Improve resolution, remove noise, or even generate new content from minimal inputs.",
      path: "/image-video-enhancement",
      image: assets.imageEnhancement
    },
    {
      title: "Personalized Virtual Assistants",
      description: "Create advanced AI-driven customer support agents with personalized responses.",
      path: "/virtual-assistants",
      image: assets.virtualAssistants
    },
    {
      title: "AI-Based Code Generation & Assistance",
      description: "Automate coding tasks, generate documentation, and provide AI-driven suggestions.",
      path: "/code-generation",
      image: assets.codeGeneration
    },
    {
      title: "AI for Financial Predictions",
      description: "Use machine learning models to forecast stock trends, detect fraud, and analyze market data.",
      path: "/financial-predictions",
      image: assets.financialPredictions
    },
    {
      title: "AI-Powered Medical Imaging",
      description: "Assist in diagnosis and analysis by enhancing medical images and identifying patterns.",
      path: "/medical-imaging",
      image: assets.medicalImaging
    },
    {
      title: "AI-Driven Document Processing",
      description: "Automate data extraction from invoices, contracts, and legal documents using OCR and NLP.",
      path: "/document-processing",
      image: assets.documentProcessing
    }
  ];

  const handleClick = (path) => {
    if (isSignedIn) {
      navigate(path);
    } else {
      openSignIn();
    }
  };

  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Key Offerings of Infyss AI Studio
      </h1>
      <div className='flex flex-wrap gap-6 mt-16 xl:mt-24 justify-center'>
        {offerings.map((offering, index) => (
          <div 
            key={index} 
            className='flex flex-col bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 w-80 cursor-pointer'
            onClick={() => handleClick(offering.path)}
          >
            <img src={offering.image} alt={offering.title} className='h-32 w-full object-cover rounded-md mb-4' />
            <p className='text-xl font-medium'>{offering.title}</p>
            <p className='text-sm text-neutral-500 mt-2'>{offering.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
