import React from 'react'

import BecomeHostStyle from '../styles/becomeHost.module.css';

const BecomeHost = () => {

    const data = {
        mainTitle: "Become a Host",
        subTitle: "Earn extra income and unlock new opportunities by sharing your space.",
        buttonText: "Learn more"
    };

    return (
        <section className={BecomeHostStyle.banner}>
            <h1 className={BecomeHostStyle.title}></h1>
            <div className={BecomeHostStyle.inner}>
                <h1 className={BecomeHostStyle.mainTitle}>{data.mainTitle}</h1>
                <h4 className={BecomeHostStyle.subTitle}>{data.subTitle}</h4>
                <br/>
                <button className={BecomeHostStyle.button}>{data.buttonText}</button>
            </div>
        </section>
    )
}

export default BecomeHost
