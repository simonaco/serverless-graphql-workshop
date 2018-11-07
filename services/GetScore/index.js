const conn = require('./../shared/utils');
const handleError = require('./../shared/error');
module.exports = function(context) {
  conn
    .connect()
    .then(client => {
      query(client);
    })
    .catch(err => handleError(500, err, context));

  const query = client => {
    const db = client.db('admin');

    db.collection('Team')
      .find()
      .toArray()
      .then(res => {
        context.log('This is a happy moment');
        res.forEach(team => delete team._id);
        const teams = res;
        context.res = {
          //status: 200,
          body: teams
        };
        context.done();
      })
      .catch(err => handleError(500, err.stack, context));
  };
};
