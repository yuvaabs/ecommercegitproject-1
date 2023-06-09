const express = require('express');
const app = express();
app.use(express.json());

const productpost = require('./src/routes/insertproduct');
const getproduct = require('./src/routes/getproduct');


app.use(productpost);
app.use(getproduct);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });