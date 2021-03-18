import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
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
      <div id="hero" className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="140">
              Blockchain Developers United
            </h1>

            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="140">
                BDU is a decentralized network of blockchain developer communities aiming to bring blockchain developers of all skill levels to train, share resources and collaborate together.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="2000">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="">
                    Join Community
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://docs.google.com/document/d/1sfbVBag7XI0dN3Wz-gMWJzAjse8KgJLZ71XtHEGk5Yk/edit?usp=sharing">
                    Read Litepaper
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div> <br /> </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;