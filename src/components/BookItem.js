import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BookItem = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.name}>{book.name}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  author: {
    color: '#666',
  },
});

export default BookItem;
