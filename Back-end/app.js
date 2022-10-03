require('dotenv').config()
require('express-async-errors')
const cnx=require('./shared/dbConfig')
const express = require('express');
const cors = require('cors');
const ContentRoute= require('./content/contentrouting')



const app =express()
app.use(express.json());
app.use(cors())
const port = process.env.PORT||4000
app.use('/content',ContentRoute)

const start = async () => {
    try {
      await cnx(process.env.URL);
      app.listen(port, () => {
        console.log(`connected  http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  start();
