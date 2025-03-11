import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const TradeSuiteComponent = () => {
  
  const { getStockInsights } = useContext(AppContext);
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  
  const fetchStockData = async () => {
    if (stockSymbol.trim() === '') return;

    const data = await getStockInsights(stockSymbol);
    setStockData(data);
  };

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------- Left Side --------- */}
      <div className='w-full max-w-lg'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          AI-powered <br className='max-md:hidden' />
          <span className='bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent '>
            stock market analytics
          </span>
          <br className='max-md:hidden' /> and trading insights.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Provides AI-driven stock analysis, trading signals, and financial decision-making <br className='max-sm:hidden' />
          support for smart investments.
        </p>
        <div className='flex gap-3'>
          <input
            type='text'
            className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter stock symbol (e.g., AAPL, TSLA)'
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value)}
          />
          <button 
            className='px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full hover:scale-105 transition-all duration-700'
            onClick={fetchStockData}
          >
            Get Insights
          </button>
        </div>

        {stockData && (
          <div className='mt-6 p-4 border rounded-md bg-white shadow'>
            <h3 className='text-xl font-semibold text-blue-600'>{stockData.name} ({stockData.symbol})</h3>
            <p className='text-gray-700 mt-2'>Price: ${stockData.price}</p>
            <p className='text-gray-700'>Change: {stockData.change}%</p>
            <p className='text-gray-700'>Market Cap: ${stockData.marketCap}</p>
          </div>
        )}
      </div>

      {/* --------- Right Side ---------- */}
      <div className='w-full max-w-md flex flex-col items-center'>
        <img src={assets.tradeSuite} alt="Trade Suite API" className='mb-4' />
      </div>
    </div>
  );
}

export default TradeSuiteComponent;
