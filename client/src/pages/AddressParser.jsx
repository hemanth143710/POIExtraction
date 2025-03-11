import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import AddressParserComponent from '../components/AddressParserComponent'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const AddressParser = () => {
  return (
    <div>
      <AddressParserComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      {/* <Upload/> */}
    </div>
  )
}

export default AddressParser