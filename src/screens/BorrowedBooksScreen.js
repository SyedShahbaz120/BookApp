import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { db } from '../config/firebaseConfig'; 
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useIsFocused } from '@react-navigation/native';

const BorrowedBooksScreen = () => {
  const isFocused = useIsFocused();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleReturn = async (book) => {
    const returned = await deleteDoc(doc(db, "borrowedBooks", book.id))
    fetchBooks();
    alert('Book returned successfully!');
  };

  const fetchBooks = async () => {
    const querySnapshot = await getDocs(collection(db, 'borrowedBooks'));
    const booksList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setBorrowedBooks(booksList);
  };

  useEffect(() => {
    fetchBooks();
  }, [isFocused])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={borrowedBooks}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.text}>{item.name}</Text>
            <Button title="Return Book" onPress={() => handleReturn(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default BorrowedBooksScreen;
