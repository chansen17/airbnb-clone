import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import ExploreNearbyStyles from '../styles/exploreNearby.module.css';

const ExploreNearby = () => {
    const places = {
        title: "Explore nearby",
        data: [
            {
                name: "South Lake Tahoe",
                distance: "4 hour drive",
                img: "https://a0.muscache.com/im/pictures/0376f4d7-6e42-4b0f-a107-0d3f3e3925d3.jpg?im_w=480"
            },
            {
                name: "Guerneville",
                distance: "2 hour drive",
                img: "https://a0.muscache.com/im/pictures/172eaf51-6aaa-4beb-b671-5e76a82a1367.jpg?im_w=480"
            },
            {
                name: "Arnold",
                distance: "3.5 hour drive",
                img: "https://a0.muscache.com/im/pictures/f15bd3a8-4bfd-4d4a-9c47-de75394ebc19.jpg?im_w=480"
            },
            {
                name: "Santa Cruz",
                distance: "2 hour drive",
                img: "https://a0.muscache.com/im/pictures/0376f4d7-6e42-4b0f-a107-0d3f3e3925d3.jpg?im_w=480"
            },
            {
                name: "Paso Robles",
                distance: "4.5 hour drive",
                img: "https://a0.muscache.com/im/pictures/172eaf51-6aaa-4beb-b671-5e76a82a1367.jpg?im_w=480"
            },
            {
                name: "Santa Barbara",
                distance: "7 hour drive",
                img: "https://a0.muscache.com/im/pictures/f15bd3a8-4bfd-4d4a-9c47-de75394ebc19.jpg?im_w=480"
            },
            {
                name: "Oakhurt",
                distance: "5 hour drive",
                img: "https://a0.muscache.com/im/pictures/0376f4d7-6e42-4b0f-a107-0d3f3e3925d3.jpg?im_w=480"
            },
            {
                name: "Mammoth Lakes",
                distance: "6.5 hour drive",
                img: "https://a0.muscache.com/im/pictures/172eaf51-6aaa-4beb-b671-5e76a82a1367.jpg?im_w=480"
            },
        ]
    };

    return (
        <div className={ExploreNearbyStyles.exploreNearbyLayout}>
            <div className={ExploreNearbyStyles.container}>
                <h1 style={{marginTop: "2rem", fontSize: "2rem"}}>{places.title}</h1>
                <div className={ExploreNearbyStyles.grid}>
                    {
                        places.data.map(p => (
                            <NavLink to={{ pathname: `/explore-nearby/${p.name}`, state: { name: p.name, distance: p.distance, img: p.img, allNearbyPlaces: places.data } }} className={ExploreNearbyStyles.destinationItem} key={p.name}>
                                <div>
                                    <img className={ExploreNearbyStyles.desinationImg} src={p.img} />
                                </div>
                                <div className={ExploreNearbyStyles.destinationText}>
                                    <h5 style={{marginBottom: ".25rem"}}>{p.name}</h5>
                                    <p style={{fontWeight: "200"}}>{p.distance}</p>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ExploreNearby
