import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import ImageToVideoComponent from '../components/ImageToVideoComponent'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const ImagetoVideo = () => {
  return (
    <div>
      <ImageToVideoComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default ImagetoVideo