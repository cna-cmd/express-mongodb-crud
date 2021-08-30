const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});
// Model: Schema
// Colección tasks
module.exports = mongoose.model('tasks', TaskSchema);
