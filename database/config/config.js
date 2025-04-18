require('dotenv').config();
const fs = require('fs');

module.exports =
{
  development: {
    url: process.env.DATABASE_URL,
    dialect: "mysql",
  },
  "test": {
    "url": process.env.TEST_DATABASE_URL,
    "dialect": "mysql"
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "dialect": "mysql"
  }
} ;
