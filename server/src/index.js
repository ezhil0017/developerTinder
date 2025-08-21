const express = require('express');
const app = express();
const port = 3000;

//! dynamic routing using both query and path params
//# http://localhost:3000/getuser/12345/orders?status=pending&limit=5
app.get('/getuser/:userId/orders', (req, res) => {
  console.log('path params: ', req.params);
  console.log('query params: ', req.query);
  res.send('dynamic query and path called successfully');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
