DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  username text,
  messageText text,
  created_at timestamp without time zone default (now() at time zone 'utc')
);