const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../Controllers/todoController");

router
  .get("/", getTodos)
  .post("/", createTodo)
  .put("/:id", updateTodo)
  .delete("/:id", deleteTodo);

module.exports = router;
