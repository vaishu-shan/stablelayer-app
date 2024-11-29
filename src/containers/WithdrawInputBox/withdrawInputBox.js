import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { GoArrowDown } from "react-icons/go";
import usdtLogo from "../../assets/Images/usdt.png";
import usdcLogo from "../../assets/Images/usdc.png";
import daiLogo from "../../assets/Images/dai.jpg";
import ghoLogo from "../../assets/Images/gho.png";
import crvLogo from "../../assets/Images/crvUSD.png";

const WithdrawInputBox = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
        name: "crvUSD",
        logo: crvLogo,
    });
  
    const [isSwap, setIsSwap] = useState(false)

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
        <div className='stake-box'>
            <div className={isSwap ? "buy-input-field-reverse" : 'buy-input-field'}>
            <div className='field-xs-text'>You Withdraw*</div>
                <div className='single-field field1-border-radius'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }} className="currency-selector" onClick={toggleDropdown}>
                            <span className="currency-name">{selectedCurrency.name}</span>
                            <div className="dropdown-icon">
                                <span>{isDropdownOpen ? "▴" : "▾"}</span>
                            </div>
                        </div>
                        <div className='field-xl-text'>0</div>
                    </div>
                    <div >
                        <img
                            src={selectedCurrency.logo}
                            alt={`${selectedCurrency.name} Logo`}
                            className="currency-logo"
                        />
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
         
            </div>
        </div>
    )
}

export default WithdrawInputBox
