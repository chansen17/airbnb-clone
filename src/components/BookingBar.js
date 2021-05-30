import React, { useState, useEffect} from 'react'
import Calendar from 'react-calendar';

import BookingBarStyles from '../styles/bookingBar.module.css';

const BookingBar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className={BookingBarStyles.bookingBar}>
            <div className="location">
                <span>Location</span>
                <br/>
                <input placeholder="Where are you going?" className={BookingBarStyles.inputStyles}/>
            </div>
            <div className="check-in">
                <span>Check in</span>
                <br/>
                <input placeholder="Add dates" className={BookingBarStyles.inputStyles}/>
                {/* <Calendar/> */}
            </div>
            <div className="check-out">
                <span>Check out</span>
                <br/>
                <input placeholder="Add dates" className={BookingBarStyles.inputStyles}/>
                {/* <Calendar/> */}
            </div>
            <div className="check-guests">
                <span>Guests</span>
                <br/>
                <input placeholder="Add guests" className={BookingBarStyles.inputStyles}/>
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}

export default BookingBar
