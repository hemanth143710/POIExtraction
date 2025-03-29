import React from 'react'
import AIPoweredDataPredictionComponent from '../components/AIPoweredDataPredictionComponent'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const AIPoweredDataPrediction = () => {
  return (
    <div>
      <AIPoweredDataPredictionComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default AIPoweredDataPrediction