

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import addBooks from '../services/AddBooks'; 
import globalStyles from '../styles/globalStyles';

const AddBooksScreen = () => {
  useEffect(() => {
    addBooks();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Adding Books to Firestore...</Text>
      <Button title="Add Books" onPress={addBooks} />
    </View>
  );
};

export default AddBooksScreen;
