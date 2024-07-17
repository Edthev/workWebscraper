const data = require("./assets/info.json")
const cors = require('cors')
const express = require('express');
const app = express();
const port = 3001;

app.use(cors())

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});