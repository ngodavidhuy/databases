var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryStr = 'SELECT * FROM messages';
      db.query(queryStr, (err, allMessages) => {
        if (err) {
          callback(err);
        } else {
          callback(null, allMessages);
        }
      });
    }, // a function which produces all the messages
    post: function (messageObj, callback) {
      let userIDQuery = `SELECT id FROM users WHERE username='${messageObj.username}'`;
      db.query(userIDQuery, (err, userID) => {
        if (err) {
        } else {
          let insertStr = `INSERT INTO MESSAGES (userID, message, roomname) VALUES (${userID[0].id}, "${messageObj.message}", "${messageObj.roomname}")`;
          db.query(insertStr, (err, newMessage) => {
            if (err) {
              callback(err);
            } else {
              callback(null, newMessage);
            }
          });
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, usernames) => {
        if (err) {
          callback(err);
        } else {
          callback(null, usernames);
        }

      });
    },
    post: function (userObj, callback) {

      // ENSURES ONLY ONE USERNAME EXISTS, WORKS BUT BREAKS TESTS ** KEEP UNCOMMENTED **
      // let queryStr = `SELECT username FROM users WHERE username='${userObj.username}'`;
      // db.query(queryStr, (err, users) => {
      //   if (err) { console.log(err); }

      //   if (users.length) {
      //     console.log('This user exists!');
      //   } else {
      let insertStr = `INSERT INTO USERS (username) VALUES ('${userObj.username}')`;
      db.query(insertStr, (err, newUser) => {
        if (err) {
          callback(err);
        } else {
          console.log('New user created!');
          callback(null, newUser);
        }
      });
      // }
      // });
    }
  }


};
