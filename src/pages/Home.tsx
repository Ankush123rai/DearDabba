import React from 'react'
import Herosection from '../components/Herosection'
import LocationSearchBar from '../components/LocationSearchBar'
import Recommended from '../components/Recommended'

const Home = () => {
  return (
    <div>
      <Herosection/>
      <LocationSearchBar/>
      <Recommended/>
    </div>
  )
}

export default Home
