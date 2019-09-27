const { Cat } = require('../../models/Cat');

const resolvers = {
  Query: {
    hello: () => 'hello',
    cats: () => Cat.find(),
    cat: ({ id }) => Cat.findById(id)
  },
  Mutation: {
    createCat: async ({ name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    }
  }
};

module.exports.resolvers = resolvers;
