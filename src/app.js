// register module aliases in order to allow absolute imports (see pacakge.json for list of aliases)
require('module-alias/register')

const {connectClient, closeClient, setDB} = require('@mongodb/mongoClient');
const {findAll} = require('@mongodb/api')
const {DB_NAME} = require('@mongodb/mongo.constant');


console.log('start');

console.log('connect');
connectClient()
    .then(client => {
        console.log('setDB')
        const db = client.db(DB_NAME)
        setDB(db);

        console.log('find all');
        findAll();

        console.log('close connection')
        closeClient();

        console.log('done');
    });

