"use strict";
exports.__esModule = true;
var mongoClient_1 = require("mongodb/mongoClient");
var api_1 = require("mongodb/api");
var mongo_constant_1 = require("mongodb/mongo.constant");
console.log('start');
console.log('connect');
mongoClient_1.connectClient()
    .then(function (client) {
    console.log('setDB');
    var db = client.db(mongo_constant_1.DB_NAME);
    mongoClient_1.setDB(db);
    console.log('find all');
    api_1.findAll();
    console.log('close connection');
    mongoClient_1.closeClient();
    console.log('done');
});
