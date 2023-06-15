const express = require('express');
const app = express();
app.use(express.json());

const productpost = require('./src/routes/insertproduct');
const getproduct = require('./src/routes/getproduct');
const adminRoutes = require('./src/routes/adminRoutes')
const userRoutes = require('./src/routes/userrouter')
const producerRouts= require('./src/routes/producerRout')



app.use(productpost);
app.use(getproduct);
app.use(adminRoutes);
app.use(userRoutes);
app.use(producerRouts);
app.use((err, req, res, next) => {
  console.error(err); 

  res.status(500).json({ error: 'Internal server error' });
});






app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

