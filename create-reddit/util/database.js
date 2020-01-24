const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let db;

exports.mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://cediba:dZyNhONpj5BZnUcR@cluster0-ai7ly.azure.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            db = client.db('reddit');
            callback();
        }).catch(err => {
            console.log(err);
        });
};

exports.getDB = () => {
    if (db) {
        return db;
    } else {
        throw err;
    }
};
