const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors())

const todoSchema= new mongoose.Schema({
    id: Number,
    title: String,
    description: String
});

const Todo = mongoose.model('Todo', todoSchema);

mongoose.connect('mongodb+srv://ShashwatPS:s@cluster0.1alkv6j.mongodb.net/TodoApp', { useNewUrlParser: true, useUnifiedTopology: true});

app.get('/todos', async (req, res) => {
    const Todos = await Todo.find({});
    res.json({courses});
});

app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        res.status(404).send();
    } else {
        res.json(todo);
    }
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000), // unique random id
        title: req.body.title,
        description: req.body.description
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    } else {
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        res.json(todos[todoIndex]);
    }
});

app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    } else {
        todos.splice(todoIndex, 1);
        res.status(200).send();
    }
});

// for all other routes, return 404
app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(3000);