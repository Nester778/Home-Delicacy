const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    time: String,
    score: Number,
    complexity: Number,
    typeDish: {
        type: String,
        enum: ['FIRST_MEAL', 'MAIN_DISHES', 'SALAD', 'SNACKS', 'BAKERY', 'DESSERT', 'MEAT', 'FISH', 'CANNED', 'DRINKS'],
        default: 'pending',
        required: true,
    },
    ingredients: {
        type: [String],
        default: [],
    },
    steps: {
        type: [String],
        default: [],
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);