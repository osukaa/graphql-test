const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:32768/hackernews';

module.exports = function () {
    return MongoClient.connect(MONGO_URL)
        .then(db => {
            return {
                Links: db.collection('links'),
                Users: db.collection('users'),
            };
        });
}