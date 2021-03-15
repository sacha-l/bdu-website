import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import About from '../components/sections/About';
import Cta from '../components/sections/Cta';
import Devcash from '../components/sections/Devcash';
import Map from '../components/sections/Map';

const Home = () => {

  return (
    <>
      <Map />
      <Hero className="illustration-section-01" />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      <About topDivider /> 
      <FeaturesTiles /> 
      <Devcash />
      {/* <Cta split />  */}
    </>
  );
}

export default Home;