import React from 'react'

import HomeStyles from '../styles/homePage.module.css';
// images
import Year from '../images/airbnb-year.svg';

// components
import ExploreNearby from '../components/ExploreNearby';
import LiveAnywhere from '../components/LiveAnywhere';
import TheGreatOutdoors from '../components/TheGreatOutdoors';
import Experiences from '../components/Experiences';
import BecomeHost from '../components/BecomeHost';
const Homepage = () => {
    return (
        <div className={HomeStyles.homeLayout}>
                <section className={HomeStyles.heroSection}>
                    <div className={HomeStyles.heroText}>
                        <h4><img src={Year} alt="Airbnb 2021" /></h4>
                        <h1>Introducing 100+ upgrades across
                        our entire service</h1>
                        <button className={HomeStyles.learnButton}><a href="#exploreNearby">Learn what's new</a></button>
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
