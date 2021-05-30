import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';

import ExploreNearbyHighlightStyles from '../styles/ExploreNearbyHighlight.module.css';


const ExploreNearbyHighlight = () => {
    const location = useLocation();
    console.log(location);
    const { name, distance, img, allNearByPlace } = location.state;

    // map
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    })
    return (
        <div className={ExploreNearbyHighlightStyles.exploreNearbyHighlightLayout}>
            <div className={ExploreNearbyHighlightStyles.featuredHighlights}>

            </div>
            <div className={ExploreNearbyHighlightStyles.map}>
                <ReactMapGL 
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                />
            </div>
        </div>
    )
}

export default ExploreNearbyHighlight
