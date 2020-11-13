const db = require('../../db');

const getAll = async () => {
    const Devs = db.Mongoose.model('dev', db.DevSchema, 'dev');
    const devList = await Devs.find({}, (e, docs) => { docs });
    return devList;
}

const insert = (data) => {
    const Devs = db.Mongoose.model('dev', db.DevSchema, 'dev');
    const dev = new Devs(data);
    dev.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        } else {
            console.log("Post saved");
            return true;
        }
    });
}

module.exports = { insert, getAll };