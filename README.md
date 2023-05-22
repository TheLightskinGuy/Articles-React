# Articles-React

My Project
Welcome to my project! This repository contains the code for my web application that displays popular articles based on user input. Below you'll find an overview of the project structure and the implemented features.

Project Structure
The project structure is organized as follows:

├── src/                       # Source code directory
│   ├── components/            # React components
│   │   ├── FirstPopularArticle.js
│   │   ├── SecondRowArticles.js
│   │   ├── ThirdRowArticles.js
│   │   ├── FourthRowArticles.js
│   │   ├── ContainerCard.js
│   │   ├── ModalWrapper.js
│   │   ├── AllArticles.js
│   │   ├── Input.js
│   ├── UI/                    # Reusable UI components
│   │   ├── ContainerCard.js
│   │   ├── ModalWrapper.js
│   ├── Homepage.js            # Main component
│   ├── App.js                 # Root component
│   ├── index.js               # Entry point
├── public/                    # Public assets
├── README.md                  # Project README file
├── package.json               # Package configuration
├── .gitignore                 # Git ignore file


Features Implemented:

User can enter a search term to fetch popular articles related to the input.
The popular articles are displayed in a card layout.
The first popular article is displayed prominently with a larger image.
Additional rows of articles are displayed in a grid layout.
User can click on an article to view it in a modal.
User can navigate through articles in the modal using previous and next buttons.
User can see all articles in a paginated view.
Pagination buttons allow the user to navigate between pages.
Loading spinner is displayed while fetching article data.
Error message is shown if no data is found.
Responsive design for optimal viewing on different devices.
Getting Started
To get started with the project, follow these steps:


Clone the repository: git clone <repository-url>
Install dependencies: npm install
Start the development server: npm start
Open the application in your browser at http://localhost:3000


Dependencies:
The project utilizes the following dependencies:
React: A JavaScript library for building user interfaces.
react-icons: A library of reusable icons for React applications.
CSS modules: Used for styling components with scoped CSS.


