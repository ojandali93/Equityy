import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { UserProvider } from './src/Context/UserContext'
import { AppProvider } from './src/Context/AppContext';
import { PropertyProvider } from './src/Context/PropertyContext';

const RootApp = () => (
  <AppProvider>
    <PropertyProvider>
      <App />
    </PropertyProvider>
  </AppProvider>
);

AppRegistry.registerComponent(appName, () => RootApp);