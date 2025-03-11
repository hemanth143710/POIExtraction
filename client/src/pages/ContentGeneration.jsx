import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import ContentGenerationComponent from '../components/ContentGenerationComponent'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const ContentGeneration = () => {
  return (
    <div>
      <ContentGenerationComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      {/* <Upload/> */}
    </div>
  )
}

export default ContentGeneration