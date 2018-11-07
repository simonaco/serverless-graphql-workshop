const MongoClient = require('mongodb').MongoClient;
let client = null;
module.exports = {
  connect: function() {
    const auth = {
      user: process.env.CosmosDBUser,
      password: process.env.CosmosDBPass
    };
    return new Promise((resolve, reject) => {
      if (client == null) {
        MongoClient.connect(
          process.env.CosmosDBURL,
          { auth: auth }
        )
          .then(_client => {
            client = _client;
            resolve(_client);
          })
          .catch(err => {
            reject(err.stack);
          });
      } else {
        resolve(client);
      }
    });
  }
};
