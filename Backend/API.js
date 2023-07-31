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

mongoose.connect('mongodb+srv://ShashwatPS:s@cluster0.1alkv6j.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true});

app.get('/todos', async (req, res) => {
    const Todos = await Todo.find({});
    res.json({Todos});
});

app.get('/todos/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(404).send();
    } else {
        res.json({todo});
    }
});

app.post('/todos',  async (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        description: req.body.description
    };
    const newSave = new Todo(newTodo);
    await newSave.save();
});

app.put('/todos/:id', async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) {
        res.status(404).send();
    } else {
        res.json({message: "Course Updated Successfully"})
    }
});

app.delete('/todos/:id', async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
        res.status(404).send();
    } else {
        res.status(200).send();
    }
});

app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(3000);