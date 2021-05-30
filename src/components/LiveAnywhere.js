import React from 'react'

import LiveAnywhereStyles from '../styles/liveAnywhere.module.css';

const categories = {
    title: "Live anywhere",
    data: [
        {
            name: "Outdoor getaways",
            img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
        },
        {
            name: "Unique stays",
            img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
        },
        {
            name: "Entire homes",
            img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
        },
        {
            name: "pets allowed",
            img: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
        }
    ]
}

const LiveAnywhere = () => {
    return (
        <div className={LiveAnywhereStyles.liveAnywhereLayout}>
                <h1 style={{marginTop: "2rem", fontSize: "2rem"}}>{categories.title}</h1>
                <div className={LiveAnywhereStyles.grid}>
                    {
                        categories.data.map(c => (
                            <div className={LiveAnywhereStyles.category} key={c.name}>
                                <img className={LiveAnywhereStyles.img} src={c.img} />
                                <h4 className={LiveAnywhereStyles.title}>{c.name}</h4>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default LiveAnywhere
