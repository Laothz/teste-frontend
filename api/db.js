const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/developers', { useNewUrlParser: true, useUnifiedTopology: true });

var devSchema = new mongoose.Schema({
    avatarUrl: String,
    nome: String,
    email: String,
    cidade: String,
    formacao: String,
    tecnologias: String
  }, { collection: 'dev' }
);
 
module.exports = { Mongoose: mongoose, DevSchema: devSchema }