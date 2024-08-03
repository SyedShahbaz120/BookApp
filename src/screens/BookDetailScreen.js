import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { db } from '../config/firebaseConfig'; 
import { collection, getDocs, addDoc } from 'firebase/firestore';

const BookDetailScreen = ({ route, navigation }) => {
  const { book } = route.params;
  const [borrowedBooks, setBorrowedBooks] = useState([]);
console.log(book);
  const handleBorrow = async () => {
    try {
      if (borrowedBooks.length >= 3) {
        alert('You can only borrow up to 3 books at a time.');
        return;
      }
      const booksCollectionRef = collection(db, 'borrowedBooks');
      const borrow = await addDoc(booksCollectionRef, book);
      alert('Book borrowed successfully!');
      console.log('Books added successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error adding books: ', error);
    }

  };

  useEffect(() => {
    const fetchBooks = async () => {
      const querySnapshot = await getDocs(collection(db, 'borrowedBooks'));
      const booksList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBorrowedBooks(booksList);
    };
    fetchBooks();
  }, [])

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>{book.name}</Text>
      <Image source={{ uri: book.cover }} style={styles.coverImage} />
      <Text style={styles.text}>Author: {book.author}</Text>
      <Text style={styles.text}>Rating: {book.rating}</Text>
      <Text style={styles.text}>Summary: {book.summary}</Text>
      <Button title="Borrow Book" onPress={handleBorrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: 200,
    height: 300,
    marginVertical: 16,
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default BookDetailScreen;
