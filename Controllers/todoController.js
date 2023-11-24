const Todo = require("../Models/todoModels");

// @desc    Get list of Todos
// @route   GET /api/v1/todos
// @access  Public
exports.getTodos = async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const todos = await Todo.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: todos.length, page, data: todos });
};

// @desc    Create Todos
// @route   Post /api/v1/todos
// @access  Privete
exports.createTodo = async (req, res) => {
  const { title, description, due_date, status } = req.body;
  const todo = await Todo.create({
    title,
    description,
    due_date,
    status,
  });
  res.status(201).json({ data: todo });
};

// @desc    Update of Todos
// @route   PUT /api/v1/todos
// @access  Privete
exports.updateTodo = async (req, res) => {
  const { id } = req.params;

  const { title, description, due_date, status } = req.body;

  const todo = await Todo.findOneAndUpdate({
    title,
    description,
    due_date,
    status,
  });
  if (!todo) {
    res.status(404).json({ msg: `No todo for this id ${id}` });
  }
  console.log(id);
  res.status(201).json({ data: todo });
};

// @desc    Delete  Todo
// @route   delete /api/v1/todos
// @access  Privete
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findOneAndDelete(id);
  if (!todo) {
    res.status(404).json({ msg: `No todo for this id ${id}` });
  }
  console.log(id);
  res.status(201).json({ data: "Deleted" });
};
