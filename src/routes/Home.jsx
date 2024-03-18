import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero'


import React from 'react'

function Home() {
  return (
     
    <div>
        <Navbar/>
        <Hero cName="Hero" 
        heroImg='src/assets/12.jpg'
        title="Your Journey Your Story"
        destination="Choose Your Favourite Destination"
        btnClass='planBtn'
        url='/'
        buttonText='Travel Plan'
        />
    </div>
  )
}

export default Home