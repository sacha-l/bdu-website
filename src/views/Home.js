import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
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
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      <About topDivider /> 
      <FeaturesTiles /> 
      <Devcash />
      {/* <Cta split />  */}
    </>
  );
}

export default Home;