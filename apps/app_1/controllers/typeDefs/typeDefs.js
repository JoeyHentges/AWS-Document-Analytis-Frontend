const { buildSchema } = require('graphql');

const defs = `
    type Cat {
        id: ID!
        name: String!
    }

    type Query {
        hello: String!
        cats: [Cat!]!
        cat(id: ID): Cat!
    }

    type Mutation {
        createCat(name: String!): Cat!
    }
`;

module.exports.typedefs = buildSchema(`${defs}`);
