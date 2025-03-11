import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import CodeGenerationComponent from '../components/CodeGenerationComponent'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const CodeGeneration = () => {
  return (
    <div>
      <CodeGenerationComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      {/* <Upload/> */}
    </div>
  )
}

export default CodeGeneration