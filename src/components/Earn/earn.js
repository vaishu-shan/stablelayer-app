import React, { useState } from 'react'
import "./earn.css"
import LockENA from '../../containers/LockENA/lockEna'
import StakeInputBox from '../../containers/StakeInputBox/stakeInputBox'
import { IconContext } from "react-icons";
import { TbInfoHexagon } from "react-icons/tb";
import UnStakeInputBox from '../../containers/UnstakeInputBox/unstakeInputBox';
import WithdrawInputBox from '../../containers/WithdrawInputBox/withdrawInputBox';

const EarnSection = () => {
    const [earnTab, setEarnTab] = useState("stake")
    return (
        <div>
            <LockENA />
            <div className='buy-container'>
                <div className='earn-page-tab'>
                    <div className={earnTab == "stake" ? 'tab-list-active' : 'tab-list'} onClick={() => setEarnTab("stake")}>Stake</div>
                    <div className={earnTab == "unstake" ? 'tab-list-active' : 'tab-list'} onClick={() => setEarnTab("unstake")}>Unstake</div>
                    <div className={earnTab == "withdraw" ? 'tab-list-active' : 'tab-list'} onClick={() => setEarnTab("withdraw")}>Withdraw</div>
                </div>
                {earnTab == "stake" ? <StakeInputBox /> : ""}
                {earnTab == "unstake" ? <UnStakeInputBox/>  : ""}
                {earnTab == "withdraw" ? <WithdrawInputBox/>  : ""}
                
                <div className='slippage-gas'>
                    <div className='s-g-text1'>Reward Eligible</div>
                    <div className='s-g-text1'>Gas: $3.11</div>
                </div>
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
                <button className='buy-cta'>Connect Wallet</button>

            </div>
        </div>
    )
}

export default EarnSection