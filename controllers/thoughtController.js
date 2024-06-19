

const { v4: uuidv4 } = require('uuid');
const { thoughts, getThoughtById: findThoughtById } = require('../Mock/mockData');

const getThoughts = async (req, res) => {
  res.json(thoughts);
};

const getThoughtById = async (req, res) => {
  const thought = findThoughtById(req.params.id);
  if (!thought) {
    return res.status(404).json({ message: 'No thought found with this ID' });
  }
  res.json(thought);
};

const createThought = async (req, res) => {
  const newThought = {
    _id: uuidv4(),
    thoughtText: req.body.thoughtText,
    username: req.body.username,
    createdAt: new Date().toISOString(),
    reactions: []
  };
  thoughts.push(newThought);
  res.json(newThought);
};

const updateThought = async (req, res) => {
  const thought = findThoughtById(req.params.id);
  if (!thought) {
    return res.status(404).json({ message: 'No thought found with this ID' });
  }
  thought.thoughtText = req.body.thoughtText || thought.thoughtText;
  res.json(thought);
};

const deleteThought = async (req, res) => {
  const index = thoughts.findIndex(thought => thought._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'No thought found with this ID' });
  }
  thoughts.splice(index, 1);
  res.json({ message: 'Thought deleted' });
};

const addReaction = async (req, res) => {
  const thought = findThoughtById(req.params.thoughtId);
  if (!thought) {
    return res.status(404).json({ message: 'No thought found with this ID' });
  }
  const newReaction = {
    reactionBody: req.body.reactionBody,
    username: req.body.username,
    createdAt: new Date().toISOString()
  };
  thought.reactions.push(newReaction);
  res.json(thought);
};

const removeReaction = async (req, res) => {
  const thought = findThoughtById(req.params.thoughtId);
  if (!thought) {
    return res.status(404).json({ message: 'No thought found with this ID' });
  }
  thought.reactions = thought.reactions.filter(reaction => reaction._id !== req.params.reactionId);
  res.json(thought);
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
};
