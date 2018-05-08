DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  messageText text,
  created_at timestamp without time zone default (now() at time zone 'utc')
);

INSERT INTO messages (messageText)
  VALUES ('Welcome to Message Board!');