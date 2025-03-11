import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const FinancialPredictionsComponent = () => {
  
  const { predictMarket } = useContext(AppContext);
  const [stockSymbol, setStockSymbol] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    if (!stockSymbol.trim()) return;

    const predictionResponse = await predictMarket(stockSymbol);
    setPrediction(predictionResponse);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI for <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent '>
            Financial Predictions
          </span>
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Use AI models to forecast stock trends, detect fraud, and analyze market data.
        </p>
        <div className='flex flex-col gap-4'>
          <input 
            type='text' 
            placeholder='Enter stock symbol (e.g., AAPL, TSLA)' 
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value)}
            className='p-3 border rounded-md shadow-sm w-full'
          />
          <button 
            className='px-6 py-3 bg-green-600 text-white rounded-full hover:scale-105 transition-all duration-700'
            onClick={handlePredict}
          >
            Predict Market Trends
          </button>
        </div>

        {prediction && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-green-600'>Prediction Result:</h3>
            <p className='mt-3 text-gray-700'>{prediction}</p>
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.financialPredictions} alt="AI Financial Predictions" className='mb-4' />
      </div>
    </div>
  );
}

export default FinancialPredictionsComponent;
