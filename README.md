# Blog Website

This is a simple blog website built using HTML, CSS, Node.js, and MongoDB. It allows users to read and write blog posts.

## Features

- View all blog posts
- Read individual blog posts
- Compose and submit new blog posts

## Technologies Used

- HTML
- CSS
- JavaScript (Node.js)
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript Templating)

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```
2. Install the dependencies:

  ```sh
  npm install
  ```
3. Start MongoDB:

Ensure MongoDB is running on your local machine. You can start MongoDB with:

  ```sh
  mongod
  ```
4. Run the application:

  ```sh
  node app.js
  ```
5. Open your browser and navigate to:
   
  ```sh
  http://localhost:3000
  ```

##Project Structure

blog-website/
├── models/
│   └── post.js
├── public/
│   └── css/
│       └── styles.css
├── views/
│   ├── index.ejs
│   ├── new-post.ejs
│   └── post.ejs
├── app.js
└── package.json

##Usage
###Home Page
The home page displays a list of all blog posts. You can click on a post title to view the full content of the post.

###Compose New Post
To compose a new post, click on the "Compose New Post" link in the navigation bar. Fill in the title and content of your post, then submit the form. You will be redirected back to the home page where your new post will be listed.

###View Post
Click on a post title on the home page to view the full content of the post.

##License
This project is licensed under the MIT License. See the LICENSE file for details.
