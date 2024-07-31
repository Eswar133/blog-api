### Installation
#### Clone the Repository
- git clone https://github.com/Eswar133/blog-api.git
- cd blog-api
#### Install Dependencies
- npm install
- npm bcryptjs
- npm body-parser
- npm express
- npm jsonwebtoken
- npm mongoose
- npm nodemon
#### Configure the Project
- Update the config.js file with your MongoDB URI and JWT secret:``` module.exports = {
  secret: 'your_jwt_secret', // Replace with your actual JWT secret
  mongoURI: 'your_mongo_uri' // Replace with your actual MongoDB URI
}; ```
#### Start the Development Server
- npm run dev
