# Social-API-MongoDB

This project is a social network API that allows users to share their thoughts, react to friends' thoughts, and manage their friend list. It is built using Node.js, Express.js, and MongoDB with Mongoose ODM. The API is designed to handle large amounts of unstructured data efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Mock Data](#mock-data)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/social-network-api.git
   cd social-network-api

   npm install for dependencies 

   mongod to start mongodb 

   npm server.js through terminal browser


## Usage 

Check get post delete routes through insomnia 

## Api Endpoints
Put this in insomnia URL : 

http://localhost:3000/api/users

GET /api/users/
: Get a single user by ID

POST /api/users: Create a new user

PUT /api/users/
: Update a user by ID


DELETE /api/users/
: Delete a user by ID

Thoughts
GET /api/thoughts: Get all thoughts
GET /api/thoughts/
: Get a single thought by ID


PUT /api/thoughts/
: Update a thought by ID


DELETE /api/thoughts/
: Delete a thought by ID



## Mock Data 

You can find mock data that is preset in insomnia through Mock /mockData.js 


## License 

MIT License


