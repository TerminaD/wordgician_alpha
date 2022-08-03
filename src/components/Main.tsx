import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import LearnTab from './LearnTab'
import SettingsTab from './SettingsTab'
import SocializeTab from './SocializeTab'

const Main = () => {
  // Create instance of BottomTabNavigator
  const Tab = createBottomTabNavigator()

  // Return main switcher screen
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="学习" component={LearnTab} />
        <Tab.Screen name="社交" component={SocializeTab} />
        <Tab.Screen name="设置" component={SettingsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Main
