const mongoose = require("mongoose");
require('dotenv').config();


mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    console.error('DB connection error:', err.message);
  });
