
DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   id int AUTO_INCREMENT PRIMARY KEY,
--   roomname text not null
-- );

CREATE TABLE users (
  id int AUTO_INCREMENT PRIMARY KEY,
  username text NOT NULL
);

CREATE TABLE messages (
  id int AUTO_INCREMENT PRIMARY KEY,
  userID int,
  message text NOT NULL,
  -- roomID int AUTO_INCREMENT,
  FOREIGN KEY (userID) REFERENCES users(id)
  -- FOREIGN KEY (roomID) REFERENCES rooms(id)
);

INSERT INTO users (id, username) VALUES
(1, 'WAVYDAVY'),
(2, 'BILLS'),
(3, 'ESEY');

-- INSERT INTO rooms (id, roomname) VALUES
-- (1, 'Galvanize'),
-- (2, 'Casino'),
-- (3, 'Enjira');

INSERT INTO messages (userID, message) VALUES
(1, 'Hello World!'),
(2, 'Hello LAS VEGAS!'),
(3, 'Hello from Eritrea!');


/*
INSERT INTO messages (objectId, username, roomname, text, createdAt) VALUES

(0000000001, 'WAVYDAVY', 'DAWGHAUS', 'WHO LET THE DOGS OUT!', '02/18/18'),
(0000000002, 'DOLLAR DOLLAR BILL$ YALL', 'HACKY REACTY', 'RECURSE YOU!', '03/25/17'),
(0000000003, 'ESEY $OLO', 'LONE WOLVES', 'WSUP', '05/01/19');
*/


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

