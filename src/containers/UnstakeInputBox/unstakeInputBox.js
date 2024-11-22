import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { GoArrowDown } from "react-icons/go";
import usdtLogo from "../../assets/Images/usdt.png";
import usdcLogo from "../../assets/Images/usdc.png";
import daiLogo from "../../assets/Images/dai.jpg";
import ghoLogo from "../../assets/Images/gho.png";
import crvLogo from "../../assets/Images/crvUSD.png";

const UnStakeInputBox = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownToOpen, setIsDropdownToOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
        name: "GHO",
        logo: ghoLogo,
    });
    const [selectedToCurrency, setSelectedToCurrency] = useState({
        name: "DAI",
        logo: daiLogo,
    });
    const [isSwap, setIsSwap] = useState(false)

    const currencies = [
        { name: "USDT", logo: usdtLogo },
        { name: "USDC", logo: usdcLogo },
        { name: "DAI", logo: daiLogo },

    ];
    const currenciesTo = [
        { name: "USDe", logo: usdcLogo },
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
        <div>
            <div className={isSwap ? "buy-input-field-reverse" : 'buy-input-field'}>
                <div className='single-field field1-border-radius'>
                    <div style={{}}>
                        <div className='field-xs-text'>You unstake</div>
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
                <IconContext.Provider value={{ color: "#fff", className: "swap-icon", size: '1.2em' }}>
                    <div style={{ margin: '1px auto' }} onClick={swappingToggle} >
                        <GoArrowDown />
                    </div>
                </IconContext.Provider>
                <div className='single-field field2-border-radius'>
                    <div style={{}}>
                        <div className='field-xs-text'>You Recieve</div>
                        <div className='field-xl-text'>0</div>
                    </div>
                    {/* sdfgdsadfg */}
                    <div className="currency-container">
                        <div className="currency-selector" onClick={toggleToDropdown}>
                            <img
                                src={selectedToCurrency.logo}
                                alt={`${selectedToCurrency.name} Logo`}
                                className="currency-logo"
                            />
                            <span className="currency-name">{selectedToCurrency.name}</span>
                            <div className="dropdown-icon">
                                <span>{isDropdownOpen ? "▴" : "▾"}</span>
                            </div>
                        </div>
                        {isDropdownToOpen && (
                            <div className="dropdown-menu">
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

export default UnStakeInputBox
