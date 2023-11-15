const Recipe = require('../models/recipe');



module.exports = function (app) {
    app.get('/', async (req, res) => {
        const recips = await Recipe.find({});
        res.json(recips);
    })
    app.get('/:type', async (req, res) => {
        const type = req.params.type;
        const recips = await Recipe.find({ typeDish: type })
        res.json(recips);
    })
}