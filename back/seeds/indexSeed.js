const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('../models/recipe');
const seedRecipe = require("./seedRecipe");

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/home-delicacy')
    .then(() => {
        console.log("open");
    }).catch(err => {
        console.log("fail");
    });

app.get('/new', async (req, res) => {
    for (let i of seedRecipe) {
        const recip = new Recipe({ title: i.title, time: i.time, score: i.score, complexity: i.complexity, typeDish: i.typeDish, ingredients: i.ingredients, steps: i.steps });
        await recip.save();
        console.log(i);
    }
    const recips = await Recipe.find({});
    res.json(recips);
})

app.get('/del', async (req, res) => {
    const recips = await Recipe.find({});
    for (let item of recips) {
        await Recipe.findByIdAndDelete(item.id);
    }
})

app.listen('8000', (req, res) => {
    console.log("Server seeds started");
})
