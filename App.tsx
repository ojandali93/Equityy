import React, { useLayoutEffect } from 'react';
import { Dimensions, SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import { useUser } from './src/Context/UserContext';
import SearchScreen from './src/Screens/Search/SearchScreen';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { getCurrentUserAccount, currentUser } = useUser();

  Amplify.configure(amplifyconfig);

  useLayoutEffect(() => {
    getCurrentUserAccount()
  }, []);

  return (
    <View style={{height: height, width: width, backgroundColor: 'grey'}}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <BottomTabNavigation />
      </SafeAreaView>
    </View>
  );
}

export default App;

