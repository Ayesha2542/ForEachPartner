/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage =>{
    console.log("Message Handler in the Background",remoteMessage)
})
messaging().getInitialNotification(async remoteMessage =>{
    console.log("Message Handler in the Kill mood",remoteMessage)
})
AppRegistry.registerComponent(appName, () => App);
