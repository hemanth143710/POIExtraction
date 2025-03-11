import React from 'react'
import Imagetoaddresscomponent from '../components/Imagetoaddresscomponent'
import ChatBotComponent from '../components/ChatBotComponent'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const ChatBot = () => {
  return (
    <div>
      <ChatBotComponent/>
      {/* <BgSlider/> */}
      <Testimonials/>
      {/* <Upload/> */}
    </div>
  )
}

export default ChatBot