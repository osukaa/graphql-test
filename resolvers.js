const links = [
    {
        id: 1,
        url: 'http://graphql.org/',
        description: 'The Best Query Language'
    },
    {
        id: 2,
        url: 'http://dev.apollodata.com',
        description: 'Awesome GraphQL Client'
    }
];

module.exports = {
    Query: {
        allLinks: (root, data, req) => {
            return req.mongo.Links.find({}).toArray();
        },
    },
    Mutation: {
        createLink: (root, data, req) => {
            return req.mongo.Links.insert(data)
                .then(res => {
                    return Object.assign({id: res.insertedIds[0]}, data);
                })
        },
        createUser: (root, data, req) => {
            const newUser = {
                name: data.name,
                email: data.authProvider.email.email,
                password: data.authProvider.email.password,
            };

            return req.mongo.Users.insert(newUser)
                .then(res => {
                    return Object.assign({id: res.insertedIds[0]}, newUser);
                })
        }
    },
    Link: {
        id: root => root._id || root.id,
    },
    User: {
        id: root => root._id || root.id,
    },
};