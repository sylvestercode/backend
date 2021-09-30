const express = require('express');

const app  = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const  mongoose =  require('mongoose');



dotenv.config();
// connecting to mongodb database
mongoose.connect('mongodb://localhost/onelove')
.then( () => console.log('Connected to database..'))
.catch( err => console.log('Could not connect to the database', err));





//getitems();

//const foodtitem = require('./fooditem');
const  productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');
//app.use('/api/products',foodtitem);
// products route
app.use('/api/products', productRouter);

// login and register user route
app.use('/api/users', userRouter);

//orderitems route

app.use('/api/orders', orderRouter);










const port =  process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}`));