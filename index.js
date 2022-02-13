import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//import App from './src/App'
import App from './src/screens/signup/Complete'
import { OfferProvider } from "./src/data/contexts/OfferContext"
import { UserProvider } from "./src/data/contexts/UserContext"
import { EventProvider } from "./src/data/contexts/EventContext"

import axios from 'axios'
    
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

axios.defaults.baseURL='https://webfrio.com/'

const Root = () => (
    <EventProvider>
        <UserProvider>
            <OfferProvider>
                <App/>
            </OfferProvider>
        </UserProvider>
    </EventProvider>
)

AppRegistry.registerComponent(appName, () => Root);
