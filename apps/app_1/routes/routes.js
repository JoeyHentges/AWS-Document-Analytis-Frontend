const express = require('express');
const { graphql } = require('graphql');
const { resolvers } = require('../controllers/resolvers/resolvers');
const { typedefs } = require('../controllers//typeDefs/typeDefs');

const router = express.Router();

const send_doc = require('./send_doc');
router.use('/', send_doc.routes);


let getCats;
let getCatById;
let createCat;

router.get('/', async (req, res) => getCats(req, res));
router.get('/2', async (req, res) => getCatById(req, res));
router.get('/3', async (req, res) => createCat(req, res));

getCats = async (req, res) => {
  const result = await graphql(typedefs, '{ cats {id name} }', resolvers.Query).then(response => response);
  res.render(
    'app_1/views/index',
    {
      title: 'hello',
      cats: result.data
    }
  );
};

// Making a new cat
// Best to use just use GraphQL for querying the database.
getCatById = async (req, res) => {
  const result = await graphql(typedefs, '{ cat(id: "5cf180d4cf144404fc2b3d64") {id name} }', resolvers.Query).then(response => response);
  console.log(result.data);
  res.send('got the cat by id');
};

createCat = async (req, res) => {
  const schema = `mutation{ createCat(
    name: "bob"
  ) {id name}}`;
  const result = await graphql(typedefs, schema, resolvers.Mutation).then(response => response);  
  console.log(result);
  res.send('created a cat');
};

module.exports.routes = router;
