

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig'; 

const addBooks = async () => {
  try {
    const booksCollectionRef = collection(db, 'books');
    
    const books = [
      {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
        summary: "A novel set in the Roaring Twenties."
      },
      {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        rating: 4.8,
        summary: "A story about racial injustice in the Deep South."
      },
      {
        name: "1984",
        author: "George Orwell",
        cover: "https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001048_1_jpg.webp",
        rating: 4.7,
        summary: "A dystopian novel about totalitarianism."
      },
      
      // Add more books as needed
    ];

    books.forEach(async (book) => {
      await addDoc(booksCollectionRef, book);
    });

    console.log('Books added successfully');
  } catch (error) {
    console.error('Error adding books: ', error);
  }
};

export default addBooks;
