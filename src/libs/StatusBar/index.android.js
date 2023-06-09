import {StatusBar} from 'react-native';

// Only has custom web implementation
StatusBar.getBackgroundColor = () => null;

// Just export StatusBar – no changes.
export default StatusBar;
