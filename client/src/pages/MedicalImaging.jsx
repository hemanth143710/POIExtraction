import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import MedicalImagingComponent from '../components/MedicalImagingComponent'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const MedicalImaging = () => {
  return (
    <div>
      <MedicalImagingComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default MedicalImaging