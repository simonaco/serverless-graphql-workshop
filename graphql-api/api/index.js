const { graphql, buildSchema } = require('graphql');
const axios = require('axios');
const typeDefs = buildSchema(`
    type Team {
        id: ID
        name: String
        points: Int
    }
    type Query {
        teams: [Team]
    }
    type Mutation {
        incrementPoints(id: ID!): Team
    }
`);

const root = {
  teams: () => {
    return axios
      .get('https://graphqlvoting.azurewebsites.net/api/score')
      .then(res => res.data);
  },
  incrementPoints: obj => {
    return axios
      .get(`https://graphqlvoting.azurewebsites.net/api/score/${obj.id}`)
      .then(res => res.data);
  }
};

module.exports = async function(context, req) {
  const body = req.body;
  context.log(`GraphQL request: ${body}`);

  const response = await graphql(
    typeDefs,
    body.query,
    root,
    null,
    body.variables,
    body.operationName
  );
  context.res = {
    body: response
  };
};
