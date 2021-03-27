import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import Logo from '../layout/partials/Logo';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Meetups = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'BDU Meetup Network',
    paragraph: 'Discover events in your timezone or location. Get networking with fellow BDU members. Join a BDU community or create your own. 🚀'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="meetups" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
           <div className="center-content"> 
            <Logo/>
          </div>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  </div>
                </div>
                <h3 className="mt-0 mb-8">
                    Toronto, ON
                    </h3>
                <div className="features-tiles-item-content toronto">
                  
                </div>
                <p className="m-0 text-sm">
                    <a href="https://www.meetup.com/Blockchain-Developers-Canada/" >Join Meetup. </a>
                  </p>
                  <p>🌐</p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  </div>
                </div>
                <h3 className="mt-0 mb-8">
                    Singapore, SG
                    </h3>
                <div className="features-tiles-item-content singapore">
                 
                </div>
                <p className="m-0 text-sm">
                    <a href="https://www.meetup.com/Government-Blockchain-Singapore/" >Join Meetup. </a>
                  </p>
                  <p>🌐</p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  </div>
                </div>
                <h3 className="mt-0 mb-8">
                    Paris, PA
                    </h3>
                <div className="features-tiles-item-content paris">

                </div>
                <p className="m-0 text-sm">
                    <a href="https://www.meetup.com/Meetup-Blockchain-Paris/" >Join Meetup. </a>
                  </p>
                  <p>🌐</p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  </div>
                </div>
                <h3 className="mt-0 mb-8">
                    Tampa Bay, FL
                    </h3>
                <div className="features-tiles-item-content tampa">
                  
              </div>
              <p className="m-0 text-sm">
                    <a href="https://www.meetup.com/Tampa-Bay-Blockchain-Developers-Meetup/" >Join Meetup. </a>
                  </p>
                  <p>🌐</p>
             </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  </div>
                </div>
                <h3 className="mt-0 mb-8">
                    Berlin, BER
                    </h3>
                <div className="features-tiles-item-content berlin">

                </div>
                <p className="m-0 text-sm">
                    <a href="https://www.meetup.com/Blockchain4GoodBerlin/" >Join Meetup. </a>
                  </p>
                  <p>🌐</p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  </div>
                </div>
                <h3 className="mt-0 mb-8">
                    San Francisco, SF
                    </h3>
                <div className="features-tiles-item-content sanFrancisco">

                </div>
                <p className="m-0 text-sm">
                    <a href="https://www.meetup.com/SF-Bitcoin-And-Blockchain-Social/" >Join Meetup. </a>
                  </p>
                  <p>🌐</p>
              </div>
            </div>

            <br></br>
            {/* TODO: Add Create your own button */}
            <div className="center-content" >
              <div className={innerClasses}>
                <div className="container-xs">
                  <div className="reveal-from-bottom" data-reveal-delay="50">
                    <Button tag="a" color="dark" wideMobile href="https://alexanderlansky.typeform.com/to/oA4zzeus">
                      Apply to Create Your Own
                  </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div> */}

          </div>

        </div>

      </div>


    </section>
  );
}

Meetups.propTypes = propTypes;
Meetups.defaultProps = defaultProps;

export default Meetups;