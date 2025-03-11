import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import ImageVideoEnhancementComponent from '../components/ImageVideoEnhancementComponent'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const ImageVideoEnhancement = () => {
  return (
    <div>
      <ImageVideoEnhancementComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default ImageVideoEnhancement