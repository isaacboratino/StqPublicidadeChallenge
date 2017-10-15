import { AppRegistry } from 'react-native';
import StorybookUI from './storybook';
import App from './src/App';

AppRegistry.registerComponent('StqPublicidadeChallenge', () => __DEV__ ? StorybookUI : App);