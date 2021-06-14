import React from 'react'
import mobileStyles from '../styles/mobileBookingBar.module.css';

const MobileBookingBar = () => {
    return (
        <input className={mobileStyles.mobileBookingBar} placeholder="Where are you going?" />
    )
}

export default MobileBookingBar
