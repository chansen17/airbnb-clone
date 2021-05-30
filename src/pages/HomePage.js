import React, { useState, useEffect} from 'react'

import HomeStyles from '../styles/homePage.module.css';
// images
import Year from '../images/airbnb-year.svg';

// components
import ExploreNearby from '../components/ExploreNearby';
import LiveAnywhere from '../components/LiveAnywhere';
import TheGreatOutdoors from '../components/TheGreatOutdoors';
import Experiences from '../components/Experiences';
import BecomeHost from '../components/BecomeHost';
import BookingBar from '../components/BookingBar';
import MobileBookingBar from '../components/MobileBookingBar';

const Homepage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [width] = useState(window.innerWidth);

    useEffect(() => {
        const width = window.innerWidth;
        if(width > 700) {
            setIsMobile(false);
        }
    } ,[width])
    
    const homepageData = {
        mainTitle: "Introducing 100+ upgrades across our entire service",
        buttonText: "Learn what's new"
    };

    return (
        <div className={HomeStyles.homeLayout}>
            {isMobile ? <MobileBookingBar/> : <BookingBar />}
                <section className={HomeStyles.heroSection}>
                    <div className={HomeStyles.heroText}>
                        <h4><img src={Year} alt="Airbnb 2021" /></h4>
                        <h1>{homepageData.mainTitle}</h1>
                        <button className={HomeStyles.learnButton}><a href="#exploreNearby">{homepageData.buttonText}</a></button>
                    </div>
                </section>
                <div id="exploreNearby"/>
            <div className={HomeStyles.homeLayoutContainer}>
                <section>
                    <ExploreNearby/>
                </section>
                <section>
                    <LiveAnywhere/>
                </section>
                <section>
                    <TheGreatOutdoors/>
                </section>
                <section>
                    <Experiences/>
                </section>
                <section>
                    <BecomeHost/>
                </section>
            </div>
        </div>
    )
}

export default Homepage
