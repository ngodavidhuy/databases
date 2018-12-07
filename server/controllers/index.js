var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log('inside err');
          res.status(500).send(err);
        } else {
          console.log('inside success');
          res.status(200).json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let messageObj = req.body;
      models.messages.post(messageObj, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).end();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    },
    post: function (req, res) {
      let userObj = req.body;
      models.users.post(userObj, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).end();
        }
      });
    }
  }
};

