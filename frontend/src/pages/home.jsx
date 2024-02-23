import React from 'react'
import Navbar from '../components/Common/Navbar'
import LanguageBar from '../components/Common/LanguageBar'
import Footer from '../components/Common/Footer'

import Image_slider from '../components/Home/Image_slider'
import Services from '../components/Home/Services'
import More from '../components/Home/More_from_us'

import AboutN from '../components/Home/About_new'

const Home = () => {
  return (
    <div>
      <LanguageBar/>
      <Navbar/>
      <Image_slider/>     
      <Services/>
      <More/>
      <AboutN/>
      <Footer/>
      
    </div>
  )
}

export default Home
