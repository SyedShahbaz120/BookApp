import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/firebaseConfig'; 
import { collection, getDocs } from 'firebase/firestore';
import BookItem from '../components/BookItem';
import globalStyles from '../styles/globalStyles';

const BooksListScreen = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const querySnapshot = await getDocs(collection(db, 'books'));
      const booksList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBooks(booksList);
    };
    fetchBooks();
  }, []);

  const handlePress = (book) => {
    navigation.navigate('BookDetail', { book });
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookItem
            book={item}
            onPress={() => handlePress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BooksListScreen;
