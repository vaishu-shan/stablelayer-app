import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { GoArrowDown } from "react-icons/go";
import usdtLogo from "../../assets/Images/usdt.png";
import usdcLogo from "../../assets/Images/usdc.png";
import daiLogo from "../../assets/Images/dai.jpg";
import ghoLogo from "../../assets/Images/gho.png";
import crvLogo from "../../assets/Images/crvUSD.png";

const StakeInputBox = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownToOpen, setIsDropdownToOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
        name: "USDT",
        logo: usdtLogo,
    });
    const [selectedToCurrency, setSelectedToCurrency] = useState({
        name: "USDe",
        logo: usdcLogo,
    });
    const [isSwap, setIsSwap] = useState(false)

    const currencies = [
        { name: "USDT", logo: usdtLogo },
        { name: "USDC", logo: usdcLogo },
        { name: "DAI", logo: daiLogo },
        { name: "GHO", logo: ghoLogo },
        { name: "crvUSD", logo: crvLogo },
    ];
    const currenciesTo = [
        { name: "USDT", logo: usdtLogo },
        { name: "USDC", logo: usdcLogo },
        { name: "DAI", logo: daiLogo },
        { name: "GHO", logo: ghoLogo },
        { name: "crvUSD", logo: crvLogo },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleToDropdown = () => {
        setIsDropdownToOpen(!isDropdownToOpen);
    };

    const swappingToggle = () => {
        setIsSwap(!isSwap)
    }

    const selectCurrency = (currency) => {
        setSelectedCurrency(currency);
        setIsDropdownOpen(false);
    };
    const selectToCurrency = (currency) => {
        setSelectedToCurrency(currency);
        setIsDropdownToOpen(false);
    };

    return (

        <div className='stake-box'>

            <div className={isSwap ? "buy-input-field-reverse" : 'buy-input-field'}>
                <div className='field-xs-text'>You Send*</div>
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
                <IconContext.Provider value={{ color: "#fff", className: "swap-icon", size: '1.2em' }}>
                    <div onClick={swappingToggle} >
                        <GoArrowDown />
                    </div>
                </IconContext.Provider>
                <div className='field-xs-text'>You Receive*</div>
                <div className='single-field field1-border-radius'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }} className="currency-selector" onClick={toggleToDropdown}>
                            <span className="currency-name">{selectedToCurrency.name}</span>
                            <div className="dropdown-icon">
                                <span>{isDropdownToOpen ? "▴" : "▾"}</span>
                            </div>
                        </div>
                        <div className='field-xl-text'>0</div>
                    </div>
                    <div >
                        <img
                            src={selectedToCurrency.logo}
                            alt={`${selectedToCurrency.name} Logo`}
                            className="currency-logo"
                        />
                        {isDropdownToOpen && (
                            <div className="dropdown2-menu">
                                {currenciesTo.map((currency) => (
                                    <div
                                        key={currency.name}
                                        className={`dropdown-item ${selectedToCurrency.name === currency.name ? "active" : ""
                                            }`}
                                        onClick={() => selectToCurrency(currency)}
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

export default StakeInputBox
