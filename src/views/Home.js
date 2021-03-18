import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Meetups from '../components/sections/Meetups';
import Events from '../components/sections/Events';
import About from '../components/sections/About';
import Cta from '../components/sections/Cta';
import Devcash from '../components/sections/Devcash';
import Map from '../components/sections/Map';
import HashLinkObserver from "react-hash-link";


const Home = () => {

  return (
    <>
     
      <Hero className="illustration-section-01" />
      <HashLinkObserver />
      <Map />
      <About topDivider /> 
      <Meetups /> 
      <Devcash />
      <Events invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Cta split />  */}
    </>
  );
}

export default Home;