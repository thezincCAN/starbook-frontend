const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: [

  ],
  credentials: true,
}));

//built in middleware
app.use(express.json());

//routes


