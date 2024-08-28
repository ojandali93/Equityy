import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { UserProvider } from './src/Context/UserContext'
import { AppProvider } from './src/Context/AppContext';

const RootApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

AppRegistry.registerComponent(appName, () => RootApp);