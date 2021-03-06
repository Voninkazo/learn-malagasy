import StorybookUIRoot from './storybook';
AppRegistry.registerComponent('learnGasy', () => StorybookUIRoot);

import App from './App';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import Root from './Root';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

AppRegistry.registerComponent(appName, () => Root);
