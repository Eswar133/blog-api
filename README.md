# blog-api
This project is an implementation of REST API end points and to handle Blog-post CRUD operations.

#API ENDPOINTS
## SIGNUP : allows to signup
- Request method : POST
- Sample endpoint : http://localhost:5000/api/auth/signup
- Sample input ``` { "user":"eswar", "email":"manikantapadala@gmail.com", "password":"eswar@133" }```
- Sample output ``` ```
- Response code : 201

## SIGNUP : allows to login
- Request method : POST
- Sample endpoint : http://localhost:5000/api/auth/login
- Sample input ``` { "email":"manikantapadala@gmail.com", "password":"eswar@133" }```
- Sample output ``` { "token": "60e3880c4b59df001f8220c2" }  ```
- Response code : 200

## GET ALL BLOG POST : Retrieves all blog posts.
- Request method : GET
- Sample endpoint : http://localhost:5000/api/blogs
- Sample output ``` [
  {
    "_id": "60e3880c4b59df001f8220c2",
    "title": "Sample Blog Post",
    "content": "The elite season five is coming.",
    "images": ["image1.jpg", "image2.jpg"],
    "author": {
      "_id": "60e387c34b59df001f8220c1",
      "username": "eswar",
      "email": "manikantapadala@gmail.com"
    },
    "createdAt": "2024-07-05T08:00:00.000Z",
    "updatedAt": "2024-07-05T08:30:00.000Z"
  },
  {
    "_id": "60e3882a4b59df001f8220c3",
    "title": "Another Blog Post",
    "content": "Saturday evening a day out with friends.",
    "images": [],
    "author": {
      "_id": "60e387c34b59df001f8220c1",
      "username": "eswar",
      "email": "manikantapadala@gmail.com"
    },
    "createdAt": "2024-07-05T09:00:00.000Z",
    "updatedAt": "2024-07-05T09:15:00.000Z"
  }
] ```
- Response code : 200

## GET SINGLE BLOG POST : Retrieve a single blog post by ID
- Request Method: GET
- Sample Endpoint: http://localhost:5000/api/blogs/:60e3880c4b59df001f8220c2
- Sample output ``` {
  "_id": "60e3880c4b59df001f8220c2",
  "title": "Sample Blog Post",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "images": ["image1.jpg", "image2.jpg"],
  "author": {
    "_id": "60e387c34b59df001f8220c1",
    "username": "eswar",
    "email": "manikantapadala@gmail.com"
  },
  "createdAt": "2024-07-05T08:00:00.000Z",
  "updatedAt": "2024-07-05T08:30:00.000Z"
} ```
- Response Code: 200


## CREATE BLOG POST : Create a new blog post
- Request Method: POST
- Endpoint: http://localhost:5000/api/blogs
- Sample Input ``` { "title": "New Blog Post",
  "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "images": ["image3.jpg"],
} ```
- Sample Output  ```{
  "_id": "60e3885e4b59df001f8220c4",
  "title": "New Blog Post",
  "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "images": ["image3.jpg"],
  "author": "60e387c34b59df001f8220c1",
  "createdAt": "2024-07-05T10:00:00.000Z",
  "updatedAt": "2024-07-05T10:00:00.000Z"
}```
-Response Code: 201 Created

## PUT BLOG POST : Update an existing blog post by ID
- Request Method : PUT
- Endpoint: http://localhost:5000/api/blogs/:60e3880c4b59df001f8220c2
- Sample Input:```{
  "title": "Updated Blog Post Title",
  "content": "Updated content here.",
  "images": ["updated-image.jpg"]
}```
- Sample Output: ```{
  "_id": "60e3880c4b59df001f8220c2",
  "title": "Updated Blog Post Title",
  "content": "Updated content here.",
  "images": ["updated-image.jpg"],
  "author": {
    "_id": "60e387c34b59df001f8220c1",
    "username": "eswar",
    "email": "manikantapadala@gmail.com"
  },
  "createdAt": "2024-07-05T08:00:00.000Z",
  "updatedAt": "2024-07-05T10:30:00.000Z"
}```
- Response Code: 200

## Delete an existing blog post by ID
- Request Method: DELETE
- Endpoint: http://localhost:5000/api/blogs/:60e3880c4b59df001f8220c2
- Sample Output: ```{
  "message": "Blog post deleted"
}```
- Response Code: 200

## Filter blog posts by title or author
- Request Method: GET
- Endpoint: http://localhost:5000/api/blogs/filter?title=Sample&author=eswar
- Sample Output ```{
    "_id": "60e3880c4b59df001f8220c2",
    "title": "Sample Blog Post",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "images": ["image1.jpg", "image2.jpg"],
    "author": {
      "_id": "60e387c34b59df001f8220c1",
      "username": "eswar",
      "email": "manikantapadala@gmail.com"
    },
    "createdAt": "2024-07-05T08:00:00.000Z",
    "updatedAt": "2024-07-05T08:30:00.000Z"
  }
] ```
- Response Code: 200


# TECH STACK
## Languages and Frameworks
- JavaScript (ES6+)
- Node.js (v.18)
- Express.js (v.4.19.2)
## Libraries and Tools
- JWT (jsonwebtoken) (v.9.0.2)
- bcrypt.js (v.2.4.3)
- Mongoose (v.8.4.5)
- Nodemon (v.3.1.4)
- Body-Parser (v.1.20.2)
- Postman (testing)
## Database
MongoDB (Atlas)

# Installation
- Link : https://github.com/Eswar133/blog-api/blob/main/install.md

# Instructions for Mango DB atlas 
- Link : https://github.com/Eswar133/blog-api/blob/main/mangodb%20installation.md
 

  
