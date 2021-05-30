import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
// pages
import HomePage from './pages/HomePage';
import ExploreNearbyHighlight from './pages/ExploreNearbyHighlight'
import LiveAnywhere from './components/LiveAnywhere';
import ExperiencesHighlight from './pages/ExperiencesHighlight';
import OnlineExperiences from './pages/OnlineExperiences';
import PlacesToStay from './pages/PlacesToStay';
import TheGreatestOutdoors from './pages/TheGreatestOutdoors';
import WanderLust from './pages/WanderLust';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/explore-nearby/:id" component={ExploreNearbyHighlight}/>
          {/* <Route exact path="/live-anywhere">
            <LiveAnywhere />
          </Route> */}
          {/* <Route exact path="/online-experiences">
            <OnlineExperiences />
          </Route> */}
          {/* <Route exact path="/experiences">
            <Experiences />
          </Route> */}
          {/* <Route exact path="/places-to-stay">
            <PlacesToStay />
          </Route> */}
          {/* <Route exact path="/live-anywhere">
            <LiveAnywhere />
          </Route> */}
          {/* <Route exact path="/the-greatest-outdoors">
            <TheGreatestOutdoors/>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
