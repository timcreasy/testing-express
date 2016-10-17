const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({msg: 'Hello World'});
});

app.post('/addresses', (req, res) => {
  res.json({_id: 123});
});

app.delete('/addresses/:id', (req, res) => {
  res.sendStatus(204);
});


app.listen(3000);

module.exports = app;