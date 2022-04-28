import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// PAGES

import ReportsScreen from './pages/ReportsScreen';

const paths = [
  {
    path: 'ReportsScreen',
    title: 'ReportsScreen',
    screen: ReportsScreen,
  },
];

export default () => {
  const Tab = createBottomTabNavigator();

  const renderRoutes = () => {
    return paths.map(item => {
      return (
        <Tab.Screen
          key={item.path}
          name={item.title}
          component={item.screen}
          options={() => ({
            headerShown: false,
            // tabBarIconStyle: {display: 'none'},
          })}
        />
      );
    });
  };
  // <Header />
  return (
    <Tab.Navigator initialRouteName="ReportsScreen">
      {renderRoutes()}
    </Tab.Navigator>
  );
};
