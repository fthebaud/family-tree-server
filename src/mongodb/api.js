const { getDB } = require('./mongoClient');

function findAll() {
    const collection = getDB().collection('persons');
    collection.find({}).toArray((err, results) => {
        if (err) throw err;
        console.log("find all", results);
        process.exit()
    });
}


module.exports = {
    findAll,
}