import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import FinancialPredictionsComponent from '../components/FinancialPredictionsComponent'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const FinancialPredictions = () => {
  return (
    <div>
      <FinancialPredictionsComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      {/* <Upload/> */}
    </div>
  )
}

export default FinancialPredictions