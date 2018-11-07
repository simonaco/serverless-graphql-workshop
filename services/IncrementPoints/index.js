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
      .findOneAndUpdate(
        { id: context.req.params.id },
        { $inc: { points: 1 } },
        { returnNewDocument: true }
      )
      .then(team => {
        context.res = {
          body: team.value
        };
        context.done();
      })
      .catch(err => handleError(500, err, context));
  };
};
