const connectMongo = require('../mongo-connector');

module.exports = function config() {
    return function middleware(req, res, next) {
        return connectMongo()
            .then(mongo => {
                req.mongo = mongo;
                next();
            })
            .catch(next);
    }
}