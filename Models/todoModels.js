const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["waiting", "in progress", "done"],
    default: "waiting",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
