import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../../components/elements/Image'

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
    };

    return (

        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                <SectionHeader data={sectionHeader} className="center-content" />

                    <div className={tilesClasses}>
                        <div className="reveal-from-right" data-reveal-onScroll="500">

                            <Image src={require('./../../assets/images/DevcashLogo-Vertical-Dark.svg')}
                                alt="Features tile icon 02"
                                className="center"
                                width={300}
                                height={100} />

                            <div className="container">
                                <div className={innerClasses}>
                                    <div className={tilesClasses}>
                                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                            <div className="tiles-item-inner">
                                                <p className="text-xs mb-">
                                                    High gas fees on <strong>Ethereum</strong> mean the majority of devcash transactions are far too expensive to carry out on Ethereum Mainnet. Therefore we have set up Devcash and Devcash apps on Layer 2 networks.
                                                </p>
                                                <p className="text-xs mb-">✓ Devcash has been bridged to xDAI STAKE using the xDai omni bridge  </p>
                                                <p className="text-xs mb-"> ✓ The Devcash bounty platform has been deployed on xDai </p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">

                                    {/* TODO: Update image to logo */}

                                    <Image
                                        src={require('./../../assets/images/DevcashLogo-Light.svg')}
                                        alt="Features tile icon 02"
                                        width={80}
                                        height={80} />
                                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider" />

                                </div>
                                <p className="text-xs mb-">
                                    <strong>Symbol:</strong> DCASH
                            </p>
                                <p className="text-xs mb-">
                                    <strong>Decimals:</strong> 8
                            </p>

                                <p className="text-xs mb-">
                                    <strong>Usage:</strong> To reward BDU community growth and developement initiatives.

                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                        <span className="testimonial-item-name text-color-high">

                                            <a href="https://etherscan.io/token/0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a"> DCASH </a>

                                        </span>
                                        <span className="testimonial-item-link">
                                            / <a href="https://etherscan.io/address/0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a">Contract Address</a>
                                        </span>

                                        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">

                                            <p className="text-xs mb-"> See various places where DevCash is being used to support Meetup organizers, post developer bounties to help push projects forward and in BDU's governance model.</p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="reveal-from-right" data-reveal-onScroll="500">
                        <SectionHeader data={sectionHeader} className="center-content" />
                 
                    <div className="tiles-item reveal-from-right" data-reveal-delay="100">
                        <div className="tiles-item-inner">

                            <p className="text-xs mb-">
                                <strong>Symbol:</strong> DCASH
                            </p>
                            <p className="text-xs mb-">
                                <strong>Decimals:</strong> 8
                            </p>

                            <p className="text-xs mb-">
                                <strong>Usage:</strong> To reward BDU community growth and developement initiatives. 

                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">

                                        <a href="https://etherscan.io/token/0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a"> DCASH </a>

                                    </span>
                                    <span className="testimonial-item-link">
                                        / <a href="https://etherscan.io/address/0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a">Contract Address</a>
                                    </span>
                                </div>
                            </p>
                        </div>
                    </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

Devcash.propTypes = propTypes;
Devcash.defaultProps = defaultProps;

export default Devcash;