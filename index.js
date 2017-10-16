const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const mongo = require('./middlewares/mongo');


const app = express();

app.use(mongo());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`Listening on PORT: ${4000}`);
});