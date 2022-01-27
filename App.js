import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import Home from './src/Home';
import Screen from './src/Screen';
import store from './src/store';
import Bill from './src/Bill';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="ScreenA"
            options={{title: 'Products'}}
            component={Screen}
          />
          <Stack.Screen name="Bill" component={Bill} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
