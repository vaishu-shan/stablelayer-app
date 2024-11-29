import React, { useState } from 'react'
import { IconContext } from "react-icons";
import "./sEna.css"
import { LuArrowUpRight } from "react-icons/lu";
import { PiGlobe } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import PortfolioLock from '../../containers/PortfolioLock/portfolioLock';


const SEnaSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(true);
    const [isExpanded3, setIsExpanded3] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleExpansion2 = () => {
        setIsExpanded2(!isExpanded2);
    };
    const toggleExpansion3 = () => {
        setIsExpanded3(!isExpanded3);
    };

    return (
        <div className='portfolio-main-cont'>
            <div className='portfolio-width'>
                <div className='portfolio-single-cont'>
                    <div className='p-s-head'>
                        USDe and Rewards Balances
                    </div>
                    <div className='p-s-list'>
                        <div className='p-s-balance-locked-cont'>
                            <div className='p-s-flex-row'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://app.ethena.fi/shared/ethena.svg" alt="" className='p-s-img' />
                                    <div className='p-s-token-name'>ENA</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='reward-type'>Stake</div>
                                </div>
                            </div>
                            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div className='p-s-balance-text'>Balance</div>
                                    <div className='p-s-actual-balance'>$0</div>
                                </div>

                            </div>
                        </div>


                        <div className='p-s-balance-locked-cont'>
                            <div className='p-s-flex-row'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://app.ethena.fi/shared/sENA.svg" alt="" className='p-s-img' />
                                    <div className='p-s-token-name'>sENA</div>
                                    <div className='sena-data'>
                                        <img src="https://app.ethena.fi/shared/rewards.svg" alt="" className='p-s-img-2' />
                                        <div className='p-s-token-name'>40x</div>
                                    </div>
                                    <div className='sena-data'>
                                        <img src="https://app.ethena.fi/shared/rewards.svg" alt="" className='p-s-img-2' />
                                        <div className='p-s-token-name'>3x</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='reward-type'>Lock</div>
                                </div>
                            </div>
                            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div className='p-s-balance-text'>Balance</div>
                                    <div className='p-s-actual-balance'>$0</div>
                                </div>
                                <div>
                                    <div className='p-s-balance-text'>Locked</div>
                                    <div className='p-s-actual-balance'>$0</div>
                                </div>
                            </div>
                        </div>

                        <div className='p-s-balance-locked-cont'>
                            <div className='p-s-flex-row'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://app.ethena.fi/shared/rsENA.svg" alt="" className='p-s-img' />
                                    <div className='p-s-token-name'>rsENA</div>
                                    <div className='sena-data'>
                                        <img src="https://app.ethena.fi/shared/rewards.svg" alt="" className='p-s-img-2' />
                                        <div className='p-s-token-name'>40x</div>
                                    </div>
                                    <div className='sena-data'>
                                        <img src="https://app.ethena.fi/shared/rewards.svg" alt="" className='p-s-img-2' />
                                        <div className='p-s-token-name'>2x</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='reward-type'>Deposit</div>
                                    <IconContext.Provider value={{ color: "#88b4f5", size: '1.2em' }}>
                                        <div style={{ marginBottom: -6, marginLeft: 5 }}  >
                                            <LuArrowUpRight />
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </div>
                            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div className='p-s-balance-text'>Balance</div>
                                    <div className='p-s-actual-balance'>$0</div>
                                </div>

                            </div>
                        </div>

                        <div className='p-s-balance-locked-cont'>
                            <div className='p-s-flex-row'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://app.ethena.fi/shared/ethena.svg" alt="" className='p-s-img' />
                                    <div className='p-s-token-name'>Ethena Points</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='eligible-sena'>Eligible sENA: 714M</div>
                                </div>
                            </div>
                            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div className='p-s-balance-text'>Balance</div>
                                    <div className='p-s-actual-balance'>0</div>
                                </div>
                                <div>
                                    <div className='p-s-balance-text'>Per Day</div>
                                    <div className='p-s-actual-balance'>0</div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className='sena-list'>
                    <div className='sena-list-single'>
                        <div className='sena-head'>
                            <img src="https://app.ethena.fi/shared/ethena.svg" alt="" className='p-s-img' />
                            <div className='sena-desc'>Ethena Network Ecosystem Applications</div>
                        </div>

                        <div className='ecosystem-social-links'>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img src="https://app.ethena.fi/shared/sENA.svg" alt="" className='p-s-img' />
                                <div className='eco-name'>Ethereal</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                    <div style={{ marginRight: 10 }} >
                                        <PiGlobe />
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                    <div style={{ marginRight: 10 }} >
                                        <RiTwitterXFill />
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                    <div  >
                                        <RiDiscordLine />
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>

                        <div className="container-month1">
                            {/* Header section */}
                            <div className="dropdown-header" onClick={toggleExpansion}>
                                <span>Month 1</span>
                                {!isExpanded ?
                                    <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                                        <div  >
                                            <MdKeyboardDoubleArrowDown />
                                        </div>
                                    </IconContext.Provider> :
                                    <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                                        <div style={{ marginRight: 10 }} >
                                            <MdKeyboardDoubleArrowUp />
                                        </div>
                                    </IconContext.Provider>
                                }
                            </div>

                            {/* Expanded section */}
                            {isExpanded && (
                                <div className="dropdown-content">
                                    <div className="item">
                                        <img src="https://app.ethena.fi/locked-sena.svg" alt="" className='p-s-img' />
                                        <span className="title">Locked sENA</span>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                                <div style={{ marginRight: 5 }}>
                                                    <PiGlobeHemisphereWestThin />
                                                </div>
                                            </IconContext.Provider>
                                            <div className="points">4x <span style={{ opacity: '0.7px', fontSize: '0.875rem', color: '#adadad', fontWeight: 400 }}>points per day </span></div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="https://app.ethena.fi/shared/sENA.svg" alt="" className='p-s-img' />
                                        <img src="https://app.ethena.fi/shared/rsENA.svg" alt="" className='p-s-img-overlay' />

                                        <span className="title">sENA / rsENA</span>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                                <div style={{ marginRight: 5 }}>
                                                    <PiGlobeHemisphereWestThin />
                                                </div>
                                            </IconContext.Provider>
                                            <div className="points">3x <span style={{ opacity: '0.7px', fontSize: '0.875rem', color: '#adadad', fontWeight: 400 }}>points per day </span></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="container-month1">
                            <div className="dropdown-header" onClick={toggleExpansion2}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className='active-month'>Active</span>
                                    <span style={{ color: '#88b4f5', fontWeight: 600 }}>Month 2</span></div>
                                {!isExpanded2 ?
                                    <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                                        <div  >
                                            <MdKeyboardDoubleArrowDown />
                                        </div>
                                    </IconContext.Provider> :
                                    <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                                        <div style={{ marginRight: 10 }} >
                                            <MdKeyboardDoubleArrowUp />
                                        </div>
                                    </IconContext.Provider>
                                }
                            </div>

                            {isExpanded2 && (
                                <div className="dropdown-content">
                                    <div className="item">
                                        <img src="https://app.ethena.fi/locked-sena.svg" alt="" className='p-s-img' />
                                        <span className="title">Locked sENA</span>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                                <div style={{ marginRight: 5 }}>
                                                    <PiGlobeHemisphereWestThin />
                                                </div>
                                            </IconContext.Provider>
                                            <div className="points">4x <span style={{ opacity: '0.7px', fontSize: '0.875rem', color: '#adadad', fontWeight: 400 }}>points per day </span></div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="https://app.ethena.fi/shared/sENA.svg" alt="" className='p-s-img' />
                                        <img src="https://app.ethena.fi/shared/rsENA.svg" alt="" className='p-s-img-overlay' />

                                        <span className="title">sENA / rsENA</span>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                                <div style={{ marginRight: 5 }}>
                                                    <PiGlobeHemisphereWestThin />
                                                </div>
                                            </IconContext.Provider>
                                            <div className="points">3x <span style={{ opacity: '0.7px', fontSize: '0.875rem', color: '#adadad', fontWeight: 400 }}>points per day </span></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="container-month1">
                            <div className="dropdown-header" onClick={toggleExpansion3}>
                                <span>Month 3</span>
                                {!isExpanded3 ?
                                    <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                                        <div  >
                                            <MdKeyboardDoubleArrowDown />
                                        </div>
                                    </IconContext.Provider> :
                                    <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                                        <div style={{ marginRight: 10 }} >
                                            <MdKeyboardDoubleArrowUp />
                                        </div>
                                    </IconContext.Provider>
                                }
                            </div>

                            {isExpanded3 && (
                                <div className="dropdown-content">
                                    <div className="item">
                                        <img src="https://app.ethena.fi/locked-sena.svg" alt="" className='p-s-img' />
                                        <span className="title">Locked sENA</span>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                                <div style={{ marginRight: 5 }}>
                                                    <PiGlobeHemisphereWestThin />
                                                </div>
                                            </IconContext.Provider>
                                            <div className="points">2x <span style={{ opacity: '0.7px', fontSize: '0.875rem', color: '#adadad', fontWeight: 400 }}>points per day </span></div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="https://app.ethena.fi/shared/sENA.svg" alt="" className='p-s-img' />
                                        <img src="https://app.ethena.fi/shared/rsENA.svg" alt="" className='p-s-img-overlay' />

                                        <span className="title">sENA / rsENA</span>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <IconContext.Provider value={{ color: "#73a0fb", size: '1.2em' }}>
                                                <div style={{ marginRight: 5 }}>
                                                    <PiGlobeHemisphereWestThin />
                                                </div>
                                            </IconContext.Provider>
                                            <div className="points">1x <span style={{ opacity: '0.7px', fontSize: '0.875rem', color: '#adadad', fontWeight: 400 }}>points per day </span></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className='sena-list-single'>
                        <div className='sena-head'>
                            <div className='sena-desc'>Ethereal Point Multipliers</div>
                        </div>
                        {/* https://app.ethena.fi/sena-chart.svg */}
                        <img src="https://app.ethena.fi/sena-chart.svg" alt="" className='eth-chart' />

                    </div>
            

                        <PortfolioLock />
              
                </div>
            </div>
        </div>
    )
}

export default SEnaSection
