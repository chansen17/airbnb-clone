import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';

import ExploreNearbyHighlightStyles from '../styles/ExploreNearbyHighlight.module.css';


const ExploreNearbyHighlight = () => {
    const location = useLocation();
    console.log(location);
    const { name, distance, img, allNearbyPlaces } = location.state;

    // map
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    const buttonsData = [
        {
            title: "Cancellation flexibility",
            url: "http://www.google.com"
        },
        {
            title: "Type of place",
            url: "http://www.google.com"
        },
        {
            title: "Price",
            url: "http://www.google.com"
        },
        {
            title: "Instant Book",
            url: "http://www.google.com"
        },
        {
            title: "More filters",
            url: "http://www.google.com"
        },
    ]
    return (
        <div className={ExploreNearbyHighlightStyles.exploreNearbyHighlightLayout}>
            <div className={ExploreNearbyHighlightStyles.featuredHighlights}>
                <div className={ExploreNearbyHighlightStyles.selectedHighlight}>
                    <h1 style={{margin: "1rem 0"}}>Stays in {name}</h1>
                    <h4>Distance {distance} miles away</h4>
                      <div>
                        {
                            buttonsData.map(d => (
                                <button className={ExploreNearbyHighlightStyles.button} key={d.title}>
                                    <a href={d.url}>{d.title}</a>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        allNearbyPlaces.map(p => (
                            <div className={ExploreNearbyHighlightStyles.featuredItem}>
                                <div>
                                    <span className={ExploreNearbyHighlightStyles.superhost}>SUPERHOST</span>
                                    <img className={ExploreNearbyHighlightStyles.featuredImg} src={p.img} />
                                </div>
                                <div>
                                    <h3>{p.name}</h3>
                                    <h4>Lorem ipsum dolor sit amet.</h4>
                                    <br/>
                                    <div>
                                        <small>4 guests</small>
                                        <small>2 bedrooms</small>
                                        <small>2 beds</small>
                                        <small>2 baths</small>
                                    </div>
                                    <div>
                                        <small>Wifi</small>
                                        <small>Kitchen</small>
                                        <small>Free parking</small>
                                        <small>Heating</small>
                                    </div>
                                    <div>
                                        <div>
                                            <span><i class="fas fa-star"></i> 5.0 (3 reviews )</span>
                                        </div>
                                        <div>$110 / night</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={ExploreNearbyHighlightStyles.map}>
                <ReactMapGL 
                    width="100%"
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                />
            </div>
        </div>
    )
}

export default ExploreNearbyHighlight
