import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookStackNavigator from './BookStackNavigator';
import BorrowedBooksScreen from '../screens/BorrowedBooksScreen';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../data/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'book';
          } else if (route.name === 'Borrowed') {
            iconName = 'bookmark';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={BookStackNavigator} />
      <Tab.Screen name="Borrowed" component={BorrowedBooksScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
