import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import LearnTab from './src/components/LearnTab';
import SettingsTab from './src/components/SettingsTab';
import SocializeTab from './src/components/SocializeTab';
import store from './src/redux/store';

// TODO: Move tab navigator into a separate Main component
const App = () => {
  // Create instance of BottomTabNavigator
  const Tab = createBottomTabNavigator()

  // Return main switcher screen
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="学习" component={LearnTab} />
          <Tab.Screen name="社交" component={SocializeTab} />
          <Tab.Screen name="设置" component={SettingsTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
