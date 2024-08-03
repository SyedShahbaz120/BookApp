Overview
The Book App is a React Native application that allows users to explore and borrow books. The app integrates with Firebase for data handling and provides a smooth and user-friendly experience.

Features
Tab Navigator: The app includes a Tab Navigator with two tabs:
Home: Features a Stack Navigator with:
Books List: Displays a list of books with basic details like Book Name and Author.
Book Detail: Shows detailed information about a selected book, including Book Name, Cover Page, Author Name, Rating, and Brief Summary. Users can borrow books from this screen, with a limit of three books at a time.
Borrowed: Displays a list of borrowed books. Users can return books from this screen.
Installation
Prerequisites
Node.js (LTS version recommended)
Expo CLI
Firebase Project
Getting Started
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <repository-name>
Install Dependencies:

bash
Copy code
npm install
# or
yarn install
Set Up Firebase:

Create a Firebase project and configure it by adding a new web app.
Download the Firebase configuration file or copy the configuration settings and update the firebaseConfig.js file in the project.
Run the App:

bash
Copy code
npm start
# or
yarn start
Follow the instructions in the terminal to run the app on an emulator or physical device.

Usage
Home Tab: Browse through the list of available books. Tap on a book to view detailed information and borrow it.
Borrowed Tab: View the list of books you have borrowed. Tap "Return Book" to return a book.
