

const { v4: uuidv4 } = require('uuid');
const { users, getUserById: findUserById } = require('../Mock/mockData');


const getUsers = async (req, res) => {
  res.json(users);
};


const getUserById = async (req, res) => {
  const user = findUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'No user found with this ID' });
  }
  res.json(user);
};


const createUser = async (req, res) => {
  const newUser = {
    _id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
    thoughts: [],
    friends: []
  };
  users.push(newUser);
  res.json(newUser);
};


const updateUser = async (req, res) => {
  const user = findUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'No user found with this ID' });
  }
  user.username = req.body.username || user.username;
  user.email = req.body.email || user.email;
  res.json(user);
};


const deleteUser = async (req, res) => {
  const index = users.findIndex(user => user._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'No user found with this ID' });
  }
  users.splice(index, 1);
  res.json({ message: 'User deleted' });
};


const addFriend = async (req, res) => {
  const user = findUserById(req.params.userId);
  const friend = findUserById(req.params.friendId);
  if (!user || !friend) {
    return res.status(404).json({ message: 'User or friend not found' });
  }
  user.friends.push(friend._id);
  res.json(user);
};


const removeFriend = async (req, res) => {
  const user = findUserById(req.params.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.friends = user.friends.filter(friendId => friendId !== req.params.friendId);
  res.json(user);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
};
