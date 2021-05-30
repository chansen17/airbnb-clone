import React from 'react'

import TheGreatOutdoorsStyles from '../styles/theGreatOutdoors.module.css';

const TheGreatOutdoors = () => {

    const data = {
        mainTitle: "The Greatest \n Outdoors",
        subTitle: "Wishlists curated by Airbnb",
        buttonText: "Get inspired"
    };

    return (
        <section className={TheGreatOutdoorsStyles.banner}>
            <h1 className={TheGreatOutdoorsStyles.title}></h1>
            <div className={TheGreatOutdoorsStyles.inner}>
                <h1 className={TheGreatOutdoorsStyles.mainTitle}>{data.mainTitle}</h1>
                <h4 className={TheGreatOutdoorsStyles.subTitle}>{data.subTitle}</h4>
                <br/>
                <button className={TheGreatOutdoorsStyles.button}>{data.buttonText}</button>
            </div>
        </section>
    )
}

export default TheGreatOutdoors
