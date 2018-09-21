const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})