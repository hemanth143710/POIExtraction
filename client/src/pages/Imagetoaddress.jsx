import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const Imagetoaddress = () => {
  return (
    <div>
      <Imagetoaddresscomponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Imagetoaddress