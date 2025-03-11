import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const DocumentProcessingComponent = () => {

  const { processDocument } = useContext(AppContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedData, setExtractedData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setSelectedFile(file);
    const result = await processDocument(file);
    setExtractedData(result);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI-Driven <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent '>
            Document Processing
          </span>
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Automate data extraction from invoices, contracts, and legal documents using OCR and NLP.
        </p>
        <div className='flex flex-col gap-4'>
          <input 
            type='file' 
            accept='.pdf,.doc,.docx,.png,.jpg' 
            id='uploadDocument' 
            hidden 
            onChange={handleFileUpload}
          />
          <label 
            htmlFor='uploadDocument' 
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-green-600 to-teal-500 text-white hover:scale-105 transition-all duration-700'
          >
            Upload Document
          </label>
        </div>

        {extractedData && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-green-600'>Extracted Data:</h3>
            <pre className='mt-3 text-gray-700 whitespace-pre-wrap'>{JSON.stringify(extractedData, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.documentProcessing} alt="AI Document Processing" className='mb-4' />
      </div>
    </div>
  );
}

export default DocumentProcessingComponent;
