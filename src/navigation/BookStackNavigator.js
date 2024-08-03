import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BooksListScreen from '../screens/BooksListScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

const Stack = createStackNavigator();

const BookStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BooksList"
        component={BooksListScreen}
        options={{ title: 'Books List' }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{ title: 'Book Details' }}
      />
    </Stack.Navigator>
  );
};

export default BookStackNavigator;
