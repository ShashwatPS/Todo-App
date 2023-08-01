const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const todoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
});

const Todo = mongoose.model("Todo", todoSchema);

mongoose.connect("mongodb+srv://ShashwatPS:s@cluster0.1alkv6j.mongodb.net/Todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Todos",
});

app.get("/todos", async (req, res) => {
  const Todos = await Todo.find({});
  res.json({ Todos });
});

app.get("/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404).send();
  } else {
    res.json({ todo });
  }
});

app.post("/todos", async (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
  };
  try {
    const newSave = new Todo(newTodo);
    await newSave.save();
    res.status(200).json(newTodo);
  } catch {
    res.status(500);
  }
});

app.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!todo) {
    res.status(404).send();
  } else {
    res.json({ message: "Course Updated Successfully" });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.deleteOne({ id: parseInt(req.params.id) });
    if (deletedTodo.deletedCount === 0) {
      res.status(404).send();
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "Error deleting todo", message: error.message });
  }
});
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(3000);
