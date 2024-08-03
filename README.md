## Overview

The Book App is a React Native application that allows users to explore and borrow books. The app integrates with Firebase for data handling and provides a smooth and user-friendly experience.

## Features

- **Tab Navigator**: The app includes a Tab Navigator with two tabs:
  - **Home**: Features a Stack Navigator with:
    - **Books List**: Displays a list of books with basic details like Book Name and Author.
    - **Book Detail**: Shows detailed information about a selected book, including Book Name, Cover Page, Author Name, Rating, and Brief Summary. Users can borrow books from this screen, with a limit of three books at a time.
  - **Borrowed**: Displays a list of borrowed books. Users can return books from this screen.
