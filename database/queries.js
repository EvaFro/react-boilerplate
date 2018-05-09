const pgp = require('pg-promise')({
  capSQL: true, // generate capitalized SQL
});

const connectionString = 'postgres://localhost:5432/message_board';
const db = pgp(connectionString);

function getAllPosts(req, res, next) {
  db.any('select * from messages')
    .then((data) => {
      res.status(200);
      const returnData = [];
      for (let i = 0; i < data.length; i += 1) {
        returnData.push(data[i].messagetext);
      }
      res.send(returnData);
    })
    .catch((err) => {
      next(err);
    });
}


const cs = new pgp.helpers.ColumnSet([
  'messagetext',
], { table: 'messages' });

function createPost(req, res, next) {
  const insert = pgp.helpers.insert(req.body, cs);
  db.none(insert)
  .then((message) => {
    res.send({ message });
  })
    .catch((err) => {
      next(err);
    });
}

// add query functions
module.exports = { getAllPosts, createPost };
