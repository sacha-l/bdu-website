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

const Devcash = ({
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
    title: 'What is Devcash?',
    paragraph: 'Devcash is an ERC20 token on Ethereum.',
    middle: 'Mission'
  };

  return (

    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="reveal-from-right" data-reveal-onScroll="500">
            <SectionHeader data={sectionHeader} className="center-content" />
          </div>              
          <div className="tiles-item reveal-from-right" data-reveal-delay="100">
            <div className="tiles-item-inner">
      
                <p className="text-sm mb-">
                  <strong>Contract Address:</strong>
                
                  <p>0x0fca8fdb0fb115a33
                      baadec6e7a141ffc1bc7d5a</p>
                </p>             
              <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <span className="testimonial-item-name text-color-high">Link</span>
                <span className="text-color-low"> / </span>
                <span className="testimonial-item-link">
                  <a href="https://bdu.dev/">Hunt Link</a>
                </span>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </section>
  );
}

Devcash.propTypes = propTypes;
Devcash.defaultProps = defaultProps;

export default Devcash;