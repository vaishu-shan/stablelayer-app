import React, { useState } from 'react'
import "../../styles/global.css"
import usdtLogo from "../../assets/Images/usdt.png";
import usdcLogo from "../../assets/Images/usdc.png";
import daiLogo from "../../assets/Images/dai.jpg";
import ghoLogo from "../../assets/Images/gho.png";
import crvLogo from "../../assets/Images/crvUSD.png";
import { IconContext } from "react-icons";
import { GoArrowDown } from "react-icons/go";

const PortfolioStake = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [innerTab1, setInnerTab1] = useState("stake")

    const [selectedCurrency, setSelectedCurrency] = useState({
        name: "USDT",
        logo: usdtLogo,
    });
    const[isSwap, setIsSwap]= useState(false)

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

    const swappingToggle = () => {
        setIsSwap(!isSwap)
    }

    const selectCurrency = (currency) => {
        setSelectedCurrency(currency);
        setIsDropdownOpen(false);
    };
  return (
    <div className={ isSwap ? "buy-input-field-reverse" :  'buy-input-field'}>
    <div className='single-field field1-border-radius'>
        <div style={{}}>
        <div className='earn-page-tab' style={{marginBottom:20}}>
                    <div className={innerTab1 === "stake" ? 'tab-list-active' : 'tab-list'} onClick={() => setInnerTab1("stake")}>Stake</div>
                    <div className={innerTab1 === "unstake" ? 'tab-list-active' : 'tab-list'} onClick={() => setInnerTab1("unstake")}>Unstake</div>
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
    </div>
    <IconContext.Provider value={{ color: "#fff", className: "swap-icon2", size:'1.2em' }} style={{top:'100px'}}>
        <div style={{ margin: '1px auto' }} onClick={swappingToggle} >
        <GoArrowDown />
        </div>
    </IconContext.Provider>
    <div className='single-field field2-border-radius'>
        <div style={{}}>
            <div className='field-xs-text'>You Recieve</div>
            <div className='field-xl-text'>0</div>
        </div>
        <div className="currency-container">
            <div className="currency-selector">
                <img
                    src={usdcLogo}
                    alt={`usde Logo`}
                    className="currency-logo"
                />
                <span className="currency-name">USDe</span>

            </div>
        </div>
    </div>
</div>
  )
}

export default PortfolioStake
