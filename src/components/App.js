import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import '../assets/css/style.css';

import Main from '../components/Main';
import AwakeriWetlands from '../components/AwakeriWetlands';
import Map from '../components/Map';
import FloraFauna from '../components/FloraFauna';
import History from '../components/History';
import ManaWhenua from '../components/ManaWhenua';
import Plant from '../components/Plant';
import TidyKiwi from './TidyKiwi';
import Areas from './Areas';
import Community from '../components/Community';
import Report from './Report';
import ThankYou from './ThankYou';
import Drawer from '../components/Drawer';
import SimpleBottomNavigation from '../components/BottomNavigation';
import Flickr from '../components/Flickr';
//import nomatch from '../components/404';

function App () {
    return (
        <div className="App">
            <CssBaseline />
            <Router>
                <Drawer />
                <SimpleBottomNavigation />

                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/awakeriwetlands" component={AwakeriWetlands} />
                        <Route path="/history" component={History} />
                        <Route path="/manawhenua" component={ManaWhenua} />
                        <Route path="/florafauna" component={FloraFauna} />
                        <Route path="/tidykiwi" component={TidyKiwi} />
                        <Route path="/areas" component={Areas} />
                        <Route path="/community" component={Community} />
                        <Route path="/map" component={Map} />
                        <Route path="/report" component={Report} />
                        <Route path="/thankyou" component={ThankYou} />
                        <Route path="/flickr" component={Flickr} />
                        <Route path="/:slug" component={Plant} />
                    </Switch>
                </div>
                
                
            </Router>
        </div>
    );
}

export default App;