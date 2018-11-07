module.exports = {
  handleError: function(status, message, context) {
    context.res = { status: status, body: message };
    context.done();
  }
};
