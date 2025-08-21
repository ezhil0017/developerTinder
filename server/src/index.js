const express = require('express');
const app = express();
const port = 3000;

app.use('/come', (req, res) => {
  res.send('Hello, World!');
});
app.use('/comeon', (req, res) => {
  res.send('Hello, World!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
