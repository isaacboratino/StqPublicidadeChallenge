import { AppRegistry } from 'react-native';
import StorybookUI from './storybook';
import {AppNavigator} from './src/AppNavigator';

console.disableYellowBox = true;

//AppRegistry.registerComponent('StqPublicidadeChallenge', () => __DEV__ ? StorybookUI : AppNavigator);
AppRegistry.registerComponent('StqPublicidadeChallenge', () => AppNavigator);