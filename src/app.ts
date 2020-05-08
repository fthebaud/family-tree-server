import {connectClient, closeClient, setDB} from './mongodb/mongoClient';
import {findAll} from './mongodb/api';
import {DB_NAME} from './mongodb/mongo.constant'

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

