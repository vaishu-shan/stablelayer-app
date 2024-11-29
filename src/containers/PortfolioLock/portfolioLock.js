import React, { useState } from 'react'
import "./portfolioLock.css"
import { IconContext } from "react-icons";
import { TbInfoHexagon } from "react-icons/tb";
import usdtLogo from "../../assets/Images/usdt.png";
import usdcLogo from "../../assets/Images/usdc.png";
import daiLogo from "../../assets/Images/dai.jpg";
import ghoLogo from "../../assets/Images/gho.png";
import crvLogo from "../../assets/Images/crvUSD.png";
import PortfolioStake from '../PortfolioStake/portfolioStake';
import PortfolioBuy from '../PortfolioBuy/portfolioBuy';
import { LuWallet } from "react-icons/lu";
import PortfolioLockTab from '../PortfolioLockTab/portfolioLockTab';

const PortfolioLock = () => {
    const [lockTab, setLockTab] = useState("lock")
    const [innerTab1, setInnerTab1] = useState("lock")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
        name: "USDT",
        logo: usdtLogo,
    });
    const currencies = [
        { name: "USDT", logo: usdtLogo },
        { name: "USDC", logo: usdcLogo },
        { name: "DAI", logo: daiLogo },
        { name: "GHO", logo: ghoLogo },
        { name: "crvUSD", logo: crvLogo },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const selectCurrency = (currency) => {
        setSelectedCurrency(currency);
        setIsDropdownOpen(false);
    };
    return (
        <div className='lock-container'>
            <div className='earn-page-tab'>
                <div className={lockTab === "lock" ? 'tab-list-lock-active' : 'tab-list-lock'} onClick={() => setLockTab("lock")}>Lock</div>
                <div className={lockTab === "stake" ? 'tab-list-lock-active' : 'tab-list-lock'} onClick={() => setLockTab("stake")}>Stake</div>
                <div className={lockTab === "buy" ? 'tab-list-lock-active' : 'tab-list-lock'} onClick={() => setLockTab("buy")}>Buy</div>
            </div>

            {lockTab === "lock" ? 
           <PortfolioLockTab/> : ""}


            {lockTab==="stake"?
            <PortfolioStake/>            
            :""}

            {lockTab==="buy"?<PortfolioBuy/>:""}


            {lockTab==="buy"? "" : <div className='earn-disclaimer'>
                <IconContext.Provider value={{ color: "#fff", size: '1em' }}>
                    <div style={{ margin: '0 10px 0 0' }}  >
                        <TbInfoHexagon />
                    </div>
                </IconContext.Provider>
                <div className='disclaimer-text'>
                    Locked sENA positions will be available to withdraw 14 days after unlocking.  This is in addition to the 7 day sENA unstaking cooldown.
                </div>
            </div>}


             <div className='slippage-cta'>
            <div className='slippage-gas'>
                <li className='s-g-text1'>Max Slippage: 0.10%</li>
                <li className='s-g-text1'>Gas: $2.97</li>
            </div>
            <button className='buy-cta'>
            <IconContext.Provider value={{ color: "#fff",  size: '1.2em' }}>
                    <div style={{marginRight:8}} >
                    <LuWallet />
                    </div>
                </IconContext.Provider>
                <span> CONNECT WALLET</span></button>
            </div>

        </div>
    )
}

export default PortfolioLock
