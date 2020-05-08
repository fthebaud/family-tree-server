const { MongoClient } = require('mongodb');

const { MONGO_URL, DB_NAME } = require('./mongo.constant');

 
let client = null;

let db = null;

// Connect to MongoDB. The callback receive the connected client as a parameter
function connectClient() {
    return MongoClient.connect(MONGO_URL);
}



// Close the client and its underlying connections
function closeClient() {
    if (client) {
        client.close();
    }
}

function setDB(database) {
    db = database;
}

function getDB() {
    return db;
}

module.exports = {
    connectClient,
    closeClient,
    getDB,
    setDB,
}
