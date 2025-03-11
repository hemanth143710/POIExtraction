import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import DocumentProcessingComponent from '../components/DocumentProcessingComponent'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const DocumentProcessing = () => {
  return (
    <div>
      <DocumentProcessingComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default DocumentProcessing