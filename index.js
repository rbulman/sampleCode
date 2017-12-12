const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', router);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
  })

app.listen(3000, () => console.log('Listening on port 3000!'));
