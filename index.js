const express = require('express');
const app = express();
app.use(express.json());

const productpost = require('./src/routes/insertproduct');
const getproduct = require('./src/routes/getproduct');
const adminRoutes = require('./src/routes/adminRoutes')
const userRoutes = require('./src/routes//userrouter')


app.use(productpost);
app.use(getproduct);
app.use(adminRoutes);
app.use(userRoutes);





app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });