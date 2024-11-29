import React, { useState } from 'react'
import "./earn.css"
import LockENA from '../../containers/LockENA/lockEna'
import StakeInputBox from '../../containers/StakeInputBox/stakeInputBox'
import { IconContext } from "react-icons";
import { TbInfoHexagon } from "react-icons/tb";
import UnStakeInputBox from '../../containers/UnstakeInputBox/unstakeInputBox';
import WithdrawInputBox from '../../containers/WithdrawInputBox/withdrawInputBox';
import { LuWallet } from "react-icons/lu";

const EarnSection = () => {
    const [earnTab, setEarnTab] = useState("stake")
    return (
        <div>
            <LockENA />
            <div className='buy-container'>
                <div className='earn-page-tab'>
                    <div className={earnTab === "stake" ? 'tab-list-active' : 'tab-list'} onClick={() => setEarnTab("stake")}>Stake</div>
                    <div className={earnTab === "unstake" ? 'tab-list-active' : 'tab-list'} onClick={() => setEarnTab("unstake")}>Unstake</div>
                    <div className={earnTab === "withdraw" ? 'tab-list-active' : 'tab-list'} onClick={() => setEarnTab("withdraw")}>Withdraw</div>
                </div>
                {earnTab === "stake" ? <StakeInputBox /> : ""}
                {earnTab === "unstake" ? <UnStakeInputBox/>  : ""}
                {earnTab === "withdraw" ? <WithdrawInputBox/>  : ""}
                <div className='earn-disclaimer'>
                    <IconContext.Provider value={{ color: "#fff", size: '1em' }}>
                        <div style={{ margin: '0 10px 0 0' }}  >
                            <TbInfoHexagon />
                        </div>
                    </IconContext.Provider>
                    <div className='disclaimer-text'>
                        ENA will be available to withdraw 7 days after unstaking.
                    </div>
                </div>
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
        </div>
    )
}

export default EarnSection
