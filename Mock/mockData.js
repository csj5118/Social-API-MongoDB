

const { v4: uuidv4 } = require('uuid');

const users = [
  {
    _id: uuidv4(),
    username: 'testuser1',
    email: 'testuser1@example.com',
    thoughts: [],
    friends: []
  },
  {
    _id: uuidv4(),
    username: 'testuser2',
    email: 'testuser2@example.com',
    thoughts: [],
    friends: []
  }
];

const thoughts = [
  {
    _id: uuidv4(),
    thoughtText: 'This is a thought from testuser1',
    username: 'testuser1',
    createdAt: new Date().toISOString(),
    reactions: []
  },
  {
    _id: uuidv4(),
    thoughtText: 'This is a thought from testuser2',
    username: 'testuser2',
    createdAt: new Date().toISOString(),
    reactions: []
  }
];

const getUserById = (id) => users.find(user => user._id === id);
const getThoughtById = (id) => thoughts.find(thought => thought._id === id);

module.exports = {
  users,
  thoughts,
  getUserById,
  getThoughtById
};
