// models/Thought.js

const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [
    {
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toISOString()
      }
    }
  ]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
