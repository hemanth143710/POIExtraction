import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Imagetoaddress from './pages/Imagetoaddress';
import ChatBot from './pages/ChatBot';
import AddressParser from './pages/AddressParser';
import ImagetoVideo from './pages/ImagetoVideo';
import TexttoAudio from './pages/TexttoAudio';
import TradeSuite from './pages/TradeSuite';
import ContentGeneration from './pages/ContentGeneration';
import ImageVideoEnhancement from './pages/ImageVideoEnhancement';
import VirtualAssistants from './pages/VirtualAssistants';
import CodeGeneration from './pages/CodeGeneration';
import FinancialPredictions from './pages/FinancialPredictions';
import MedicalImaging from './pages/MedicalImaging';
import DocumentProcessing from './pages/DocumentProcessing';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      <ScrollToTop />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
          <Route path='/image-to-address-api' element={<Imagetoaddress />} />
          <Route path='/chat-bot-api' element={<ChatBot />} />
          <Route path='/address-parser-api' element={<AddressParser />} />
          <Route path='/image-to-video-api' element={<ImagetoVideo />} />
          <Route path='/text-to-audio-api' element={<TexttoAudio />} />
          <Route path='/trade-suite-api' element={<TradeSuite />} />
          <Route path='/content-generation' element={<ContentGeneration />} />
          <Route path='/image-video-enhancement' element={<ImageVideoEnhancement />} />
          <Route path='/virtual-assistants' element={<VirtualAssistants />} />
          <Route path='/code-generation' element={<CodeGeneration />} />
          <Route path='/financial-predictions' element={<FinancialPredictions />} />
          <Route path='/medical-imaging' element={<MedicalImaging />} />
          <Route path='/document-processing' element={<DocumentProcessing />} />
       </Routes>
       <Footer/>
    </div>
  )
}

export default App