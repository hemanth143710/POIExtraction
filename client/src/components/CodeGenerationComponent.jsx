import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const CodeGenerationComponent = () => {
  
  const { generateCode } = useContext(AppContext);
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    const codeResponse = await generateCode(prompt);
    setGeneratedCode(codeResponse);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI-Based <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent '>
            Code Generation & Assistance
          </span>
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Automate coding tasks, generate documentation, and get AI-driven coding suggestions.
        </p>
        <div className='flex flex-col gap-4'>
          <textarea 
            placeholder='Describe the function or code you need...' 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className='p-3 border rounded-md shadow-sm w-full h-32'
          />
          <button 
            className='px-6 py-3 bg-blue-600 text-white rounded-full hover:scale-105 transition-all duration-700'
            onClick={handleGenerate}
          >
            Generate Code
          </button>
        </div>

        {generatedCode && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-blue-600'>Generated Code:</h3>
            <pre className='mt-3 text-gray-700 bg-gray-100 p-3 rounded-md overflow-auto'>{generatedCode}</pre>
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.codeGeneration} alt="AI Code Generation" className='mb-4' />
      </div>
    </div>
  );
}

export default CodeGenerationComponent;
