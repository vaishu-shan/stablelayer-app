import React, { useState } from 'react'
import "./portfolio.css"
import { IconContext } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import PortfolioLock from '../../containers/PortfolioLock/portfolioLock';

const PortfolioScreen = () => {

    const rewardBalance = [
        { id: 1, image: "https://app.ethena.fi/shared/usde.svg", tokenName: "USDe", rewardType: "Buy", lockedText: 'Locked', lockedData: '$0' },
        { id: 1, image: "https://app.ethena.fi/shared/sUSDe.svg", tokenName: "USDe", rewardType: "Earn", lockedText: 'Rewards Per Day', lockedData: '$0' },
        { id: 1, image: "https://app.ethena.fi/shared/rewards.svg", tokenName: "USDe", rewardType: "Detail", lockedText: 'Earned Per Day', lockedData: '0' },
        { id: 1, image: "https://app.ethena.fi/_next/image?url=%2Fshared%2Fcurve.png&w=32&q=75&dpl=dpl_G8KY6YfxyiVjZMUeZW4xvo1GgjAs", tokenName: "USDe", rewardType: "Deposit" },
    ]

    return (
        <div className='portfolio-main-cont'>
            <div className='portfolio-width'>
                <div className='portfolio-single-cont'>
                    <div className='p-s-head'>
                        USDe and Rewards Balances
                    </div>
                    <div className='p-s-list'>
                        {rewardBalance?.map((item, index) => {
                            return (
                                <div className='p-s-balance-locked-cont'>
                                    <div className='p-s-flex-row'>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={item.image} alt="" className='p-s-img' />
                                            <div className='p-s-token-name'>{item.tokenName}</div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className='reward-type'>{item.rewardType}</div>
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
                                        <div>
                                            <div className='p-s-balance-text'>{item.lockedText}</div>
                                            <div className='p-s-actual-balance'>{item.lockedData}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='portfolio-single-cont'>
                    <div className='p-s-head'>
                        ENA Balances
                    </div>
                    <div className='p-s-list'>
                        <div className='p-s-balance-locked-cont-2'>
                            <div className='p-s-flex-row'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://app.ethena.fi/shared/ethena.svg" alt="" className='p-s-img' />
                                    <div className='p-s-token-name'>ENA</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='reward-type'>Stake</div>
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
                                <div>
                                    <div className='p-s-balance-text'>Locked </div>
                                    <div className='p-s-actual-balance'>$0</div>
                                </div>
                            </div>
                        </div>
                        <div className='p-s-balance-locked-cont-2'>
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
                                <div>
                                    <div className='p-s-balance-text'>Locked </div>
                                    <div className='p-s-actual-balance'>$0</div>
                                </div>
                            </div>
                        </div>
                        <div className='p-s-balance-locked-cont-2'>
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
                    </div>
                </div>
                <div className='portfolio-stake-sec'>
                    <div className='portfolio-stake-banner'>
                        <div className='layout-background-image ' style={{padding:'1.5rem',borderRadius:7}}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>Stake ENA to begin earning boosted rewards on non-ENA positions</div>
                                <div className='stake-ena-cta'>Stake ENA</div>
                            </div>
                        </div>
                    </div>
                 <PortfolioLock/>
                </div>


            </div>
        </div>
    )
}

export default PortfolioScreen
