import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { split } from 'lodash';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const About = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'About Us',
    paragraph: 'Blockchain Developers United is a decentralized network of blockchain developer communities, including both in-person meetup groups across the globe, and online only communities dedicated to specific technologies or interests. BDU member communities organize regular meetups that bring together blockchain developers of all skill levels to train, share resources and collaborate. Hands on training is emphasized in particular to teach developers how to really implement blockchain applications.',
  };

  return (

    <section
      {...props}
      className={outerClasses}
    >
      <div id="about" className="container">
        <div className={innerClasses}>
          <div className="reveal-from-right" data-reveal-onScroll="500">
            <SectionHeader data={sectionHeader} className="center-content" />
          </div>
          
          {/* 
          {/* alternative option tiles 
          <div className="tiles-item reveal-from-right" data-reveal-delay="100">
            <div className="tiles-item-inner">
              <div className="testimonial-item-content">
                <p className="text-sm mb-">
                  <strong>Current Projects</strong>
                </p>
                <p className="text-sm mb-0">
                  bla bla bla
                  </p>
                <p><span role="img" aria-label="laptop">🤓</span> </p>
              </div>
              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <span className="testimonial-item-name text-color-high">Link</span>
                <span className="text-color-low"> / </span>
                <span className="testimonial-item-link">
                  <a href="https://bdu.dev/">Hunt Link</a>
                </span>
              </div>
            </div>
          </div> */}
          <div className="container">
            <div className={innerClasses}>
              <div className={tilesClasses}>

                {/*Tile #1 */}
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Our Mission
                    </h4>
                      <p className="m-0 text-sm">
                        BDU’s mission is to pursue the interests of its member communities. train new developers, and to promote deep collaboration between developer communities.
                  </p>
                    </div>
                  </div>
                </div>

                {/*Tile #2 */}
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Open Governance
                    </h4>
                      <p className="m-0 text-sm">
                        BDU membership requirements and rules for new communities are determined by existing member communities. The requirements and rules are updated dynamically by the collective decision making of community organizers to reflect community needs and the overall state of the blockchain ecosystem.
                  </p>
                    </div>
                  </div>
                </div>

                {/*Tile #3 */}
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Free Education
                    </h4>
                      <p className="m-0 text-sm">
                        <li>
                          To provide shared access to developer resources
                    </li>
                        <li>
                          To provide hands on developer training
                    </li>
                      </p>
                    </div>
                  </div>
                </div>

                {/*Tile #4 */}
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Community
                    </h4>
                      <p className="m-0 text-sm">
                        <li>
                          Train local blockchain developer talent
                    </li>
                        <li>
                          Collaborate on projects small and large
                    </li>
                        <li>
                          Provide community testing and debugging
                    </li>
                      </p>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;