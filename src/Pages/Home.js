import React from 'react'
import Feature from '../Components/Feature'
import FeatureProperties from '../Components/FeatureProperties'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MailList from '../Components/MailList'
import NavBar from '../Components/NavBar'
import PropertyList from '../Components/PropertyList'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <Header/>
        <div className='homeContainer'>
          <Feature/>

          <h1 className='homeTitle'>Browse by Property Type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Home Guest Love</h1>
          <FeatureProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home