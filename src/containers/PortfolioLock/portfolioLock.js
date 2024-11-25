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

            {lockTab === "lock" ? <div className='lock-tab-input'>
                <div style={{}}>
                <div className='earn-page-tab' style={{marginBottom:20}}>
                    <div className={innerTab1 === "lock" ? 'tab-list-active' : 'tab-list'} onClick={() => setInnerTab1("lock")}>Lock</div>
                    <div className={innerTab1 === "unlock" ? 'tab-list-active' : 'tab-list'} onClick={() => setInnerTab1("unlock")}>Unlock</div>
                    <div className={innerTab1 === "withdraw" ? 'tab-list-active' : 'tab-list'} onClick={() => setInnerTab1("withdraw")}>Withdraw</div>
                </div>
                    <div className='field-xl-text'>0</div>
                </div>
                <div className="currency-container">
                    <div className="currency-selector" onClick={toggleDropdown}>
                        <img
                            src={selectedCurrency.logo}
                            alt={`${selectedCurrency.name} Logo`}
                            className="currency-logo"
                        />
                        <span className="currency-name">{selectedCurrency.name}</span>
                        <div className="dropdown-icon">
                            <span>{isDropdownOpen ? "▴" : "▾"}</span>
                        </div>
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {currencies.map((currency) => (
                                <div
                                    key={currency.name}
                                    className={`dropdown-item ${selectedCurrency.name === currency.name ? "active" : ""
                                        }`}
                                    onClick={() => selectCurrency(currency)}
                                >
                                    <img
                                        src={currency.logo}
                                        alt={`${currency.name} Logo`}
                                        className="dropdown-logo"
                                    />
                                    <span className="dropdown-name">{currency.name}</span>
                                    <span className="dropdown-balance">0</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div> : ""}


            {lockTab==="stake"?
            <PortfolioStake/>            
            :""}

            {lockTab==="buy"?<PortfolioBuy/>:""}

            <div className='slippage-gas'>
                <div className='s-g-text1'>Reward Eligible</div>
                <div className='s-g-text1'>Gas: $3.11</div>
            </div>
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
            <button className='buy-cta'>Connect Wallet</button>

        </div>
    )
}

export default PortfolioLock
