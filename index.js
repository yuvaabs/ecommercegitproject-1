const express = require('express');
const app = express();
app.use(express.json());

const productpost = require('./src/routes/insertproduct');
const getproduct = require('./src/routes/getproduct');
const adminRoutes = require('./src/routes/adminRoutes')

app.use(productpost);
app.use(getproduct);
app.use(adminRoutes);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });