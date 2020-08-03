import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Constant from 'expo-constants'
import { NavigationContainer,DarkTheme,useTheme,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Videoplayer from './src/screens/Videoplayer'
import Explore from './src/screens/Explore'
import Suscribe from './src/screens/Suscribe'
import {MaterialIcons} from '@expo/vector-icons'
import {Provider,useSelector} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {reducer} from './src/reducer/reducer';
import {themereducer} from './src/reducer/themereducer'


const reducerData=combineReducers({
  cardData:reducer,//[]
  myDarkMode:themereducer//false
});
const store=createStore(reducerData);
const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator();
const customDarkTheme={
   ...DarkTheme,
   colors:{
     ...DarkTheme.colors,
     headerColor:'#404040',
     iconColor:'white',
     tabIcon:'white'
   }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:'white',
    iconColor:'black',
    tabIcon:'red'
  }
}
const Roothome=()=>{
  const {colors}=useTheme();
  return(
    <Tabs.Navigator
     screenOptions={({ route }) => ({
          tabBarIcon: ({color }) => {
            let iconName;

            if (route.name === 'home') {
              iconName ='home'
            } else if (route.name === 'explore') {
              iconName = 'explore'
            }else if(route.name === 'suscribe')
            {
              iconName= 'subscriptions'
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.tabIcon,
          inactiveTintColor: 'gray',
        }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="suscribe" component={Suscribe} />
    </Tabs.Navigator>
  )
}

export default function App(){
  return(
  <Provider store={store}>
  <Navigation />
  </Provider>
  )
}
export function Navigation() {
  let currenttheme=useSelector(state => {
    return state.myDarkMode
  })
  return (
   
      <NavigationContainer theme={currenttheme?customDarkTheme:customDefaultTheme}>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="roothome" component={Roothome} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="videoplayer" component={Videoplayer} />
      </Stack.Navigator>
      </NavigationContainer>
   
    
  );
}

