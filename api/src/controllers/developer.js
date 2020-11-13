const developerModel = require('../models/developer');

const index = (req, res) => {
    developerModel.getAll()
        .then(response => {
            res.json({ erro: false, response });
        })
        .catch(err => {
            res.json({ erro: true, response: err });
        });
}

const save = (req, res) => {
    try{
        developerModel.insert(req.body);
        res.json({ erro: false, message: 'Sucesso ao salvar!' })
    } catch (err) {
        console.log(err);
        res.json({ erro: true, message: err });
    }
}

module.exports = { save, index };