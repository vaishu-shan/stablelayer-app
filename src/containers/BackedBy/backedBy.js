import React from 'react'
import "./backedBy.css"
import Logo1 from "../../assets/Images/okx-logo.png"

const BackedBy = () => {
  return (
    <div className='backed-sec'>
      <div className='b-s-head text-white'>Backed By</div>
      {/* <div className='linear'>
        <div className='linear-inside'></div>
      </div> */}
      <div class="gradient-line"></div>

      <div className='sponser-logo'>
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
      </div>
    </div>
  )
}

export default BackedBy
