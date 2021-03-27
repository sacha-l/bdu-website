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
        paragraph: 'Devcash is BDU’s native cryptocurrency and economic engine.',
        //paragraph: 'Devcash is an ERC20 token on Ethereum. It is designed to bolster community initiatives, bringing developers together to work on projects while encouraging their growth.',
    };

    return (

        <section
            {...props}
            className={outerClasses}
        >
            <div id="devcash" className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className="container-xs">
                    <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="140">
                    <ul>
                        <li>
                        The Devcash IBO is live! Click <u><a href="//devcash.xyz">here</a></u> to participate. 
                        </li>
                    </ul>
                    <li> 
                    Devcash began as an ERC20 token on Ethereum, and is being extended to other chains. 
                    </li>
                    <li>
                    The primary way to earn and use devcash is with the devcash bounty platform. 
                    </li>
                    </p>
                    The IBO is Devcash’s initial distribution and labour crowdsourcing event. 

                    IBO stands for Initial Bounty Offering. The IBO is a twist on the ICO model, where rather than investing money, you invest your time and skills. 
           
                    Learn more about the IBO by <u><a href="https://docs.google.com/document/d/1sfbVBag7XI0dN3Wz-gMWJzAjse8KgJLZ71XtHEGk5Yk/edit?usp=sharing">reading the Litepaper</a></u>. 
           <p className="m-0 mb-32"></p>

                </div>




                    <div className={tilesClasses}>
                        <div className="center-content" data-reveal-onScroll="100">

                            <Image src={require('./../../assets/images/DevcashLogo-Vertical-Dark.svg')}
                                alt="Features tile icon 02"
                                className="center"
                                width={200}
                                height={100} 
                            />
                                        
                                    <div className={tilesClasses}>
                                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="50">
                                            <p></p>
                                            <p>
                                            The Devcash bounty platform is the backbone of the Devcash economy. Users can post bounties in either Devcash or ETH/XDAI and earn rewards by hunting them. 
                                            </p>
                                            <div className="tiles-item-inner">
                                                <p className="color text-xs mb-">
                                                    High gas fees on <strong>Ethereum</strong> means that the majority of Devcash transactions are far too expensive to carry out on Ethereum Mainnet. 
                                                    Therefore, BDU has set up Devcash and related apps on a Layer 2 network &mdash; <a href="https://blockscout.com/xdai/mainnet/address/0x248E081e3C9e738D7C1ded5d471069dcf4Fd9B15/transactions"> <strong>xDai</strong> (view Contract on Blockscout).</a>
                                                </p>                                                
                                                <p className="color text-xs mb-">✓ Devcash has been bridged to xDAI STAKE using the xDai omni bridge  </p>
                                                <p className="color text-xs mb-"> ✓ The Devcash bounty platform has been deployed on xDai </p>
                                            </div>
                                        </div>
                                    </div>       
                        </div>
                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                           <div className={outerClasses}>
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <Image
                                        src={require('./../../assets/images/DevcashLogo-Light.svg')}
                                        alt="Features tile icon 02"
                                        width={100}
                                        height={100} />
                                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider" />

                                </div>

                                <p className="color text-xs mb-">
                                    <strong>Symbol:</strong> DCASH
                                </p>
                                <p className="color text-xs mb-">
                                    <strong>Decimals:</strong> 8
                                </p>

                                <p className="color text-xs mb-">
                                    <strong>Usage:</strong> To reward BDU community growth and developement initiatives.
                                </p>

                                <p className="color text-xs mb-">
                                <strong>Total supply:</strong> 2,100,000,000                                 
                                </p>
                                <hr />
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
                                    <span className="testimonial-item-name text-color-high">

                                        <a href="https://etherscan.io/token/0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a"> DCASH / Native ERC20 Token</a>

                                    </span>
                                    <p></p>
                                    <span className="testimonial-item-link">
                                        <a href="https://etherscan.io/address/0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a">View Contract on Etherscan</a>
                                    </span> 

                                </div>
                                <div>
                                <Image src={require('./../../assets/images/etherscan-logo-circle.svg')}
                                    alt="Features tile icon 03"
                                    width={130}
                                    height={130}
                                    className="etherscan" />
                                <p className="center-content">Powered by Etherscan</p>
                                </div>                               


                            </div>
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