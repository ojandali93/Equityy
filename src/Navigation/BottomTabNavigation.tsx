import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Globe, Grid, List, Search, User} from 'react-native-feather';
import { View } from 'react-native';
import SearchScreen from '../Screens/Search/SearchScreen';

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black', // Set active icon color
        tabBarInactiveTintColor: 'gray', // Se
      }}>
        <Tab.Screen
          name="Feed"
          key="Feed"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                {
                  focused 
                    ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'blue', position: 'absolute', top: 0}}></View>
                        <Grid style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                    : <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'white', position: 'absolute', top: 0}}></View>
                        <Grid style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                }
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lists"
          key="Lists"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                {
                  focused 
                    ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'blue', position: 'absolute', top: 0}}></View>
                        <List style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                    : <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'white', position: 'absolute', top: 0}}></View>
                        <List style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                }
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          key="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                {
                  focused 
                    ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'blue', position: 'absolute', top: 0}}></View>
                        <Search style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                    : <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'white', position: 'absolute', top: 0}}></View>
                        <Search style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                }
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          key="Explore"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                {
                  focused 
                    ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'blue', position: 'absolute', top: 0}}></View>
                        <Globe style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                    : <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'white', position: 'absolute', top: 0}}></View>
                        <Globe style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                }
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          key="Profile"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                {
                  focused 
                    ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'blue', position: 'absolute', top: 0}}></View>
                        <User style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                    : <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{width: '100%', height: 3, backgroundColor: 'white', position: 'absolute', top: 0}}></View>
                        <User style={{marginTop: 12}} stroke={'black'} height={20} width={20} strokeWidth={3}/>
                      </View>
                }
              </View>
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation
