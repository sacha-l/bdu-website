import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../react-simple-maps-master/utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Annotation from '/home/alansky/Dev/BDU-website/learn-and-earn/src/components/react-simple-maps-master/components/Annotation.js'
import MapChart from '../react-simple-maps-master/MeetupMap/MapChart';
import "../styles.css";


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="140">
              Blockchain Developers United
            </h1>

            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="140">
              BDU is a decentralized network of blockchain developer communities aiming to bring blockchain developers of all skill levels to train, share resources and collaborate together.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="1000">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#about-bdu">
                    Join Community
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/BlockDevsUnited">
                    Litepaper
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* //TODO: REPLACE STOCK IMAGE WITH REAL MAP FROM "REACT-SIMPLE-MAPS" */}
         <div> <br/> </div>
          <div dclassName="reveal-from-bottom" data-reveal-delay="2000">
          <MapChart />
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
          <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              
              
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;