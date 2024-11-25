import React from 'react'
import "./navbar.css"
import { RiShareLine } from "react-icons/ri";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onScreenRoute = (route) => {
        navigate(route);
    }

    const isActive = (route) => location.pathname === route;

    return (
        <div class="navbar  mb-2">
            <div class="navbar-left">
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 24, marginRight: 10 }}>StableLayer</div>
                <div className={`navbar-list ${isActive('/portfolio') ? 'active' : ''}`}
                    onClick={() => onScreenRoute('/portfolio')}>Portfolio</div>
                <div className={`navbar-list ${isActive('/sena') ? 'active' : ''}`}>sENA</div>
                <div
                    className={`navbar-list ${isActive('/buy') ? 'active' : ''}`}
                    onClick={() => onScreenRoute('/buy')}
                >
                    Buy
                </div>
                <div
                    className={`navbar-list ${isActive('/earn') ? 'active' : ''}`}
                    onClick={() => onScreenRoute('/earn')}
                >
                    Earn
                </div>
                <div className={`navbar-list ${isActive('/reward') ? 'active' : ''}`}>Reward</div>
                <div className={`navbar-list ${isActive('/dashboards') ? 'active' : ''}`}>Dashboards</div>
            </div>
            <div class="navbar-right">
                <div class="metric">
                    <span>TVL</span>
                    $3.28B
                </div>
                <div class="metric">
                    <span>APY</span>
                    29%
                </div>
                <div class="metric">
                    <span>Est. APY</span>
                    31%
                </div>
                <div class="metric">
                    <span>Users</span>
                    303.16K
                </div>
                <button class="connect-btn">
                    Connect Wallet  </button>
            </div>
        </div>

    )
}

export default Navbar
