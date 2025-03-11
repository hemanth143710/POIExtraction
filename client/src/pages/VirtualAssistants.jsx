import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'

import VirtualAssistantsComponent from '../components/VirtualAssistantsComponent'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const VirtualAssistants = () => {
  return (
    <div>
      <VirtualAssistantsComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      {/* <Upload/> */}
    </div>
  )
}

export default VirtualAssistants