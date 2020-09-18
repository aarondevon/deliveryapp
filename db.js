// const client = new Client({
//   connectionString: process.env.DATABASE_URL + '?ssl=true',
//
//
//
//   const connectionString =
//       'postgres://hnebxrfbdaujot:20362abc2771ef0fbc9c4ff32f6ec641ebc7703f4f5bc7e6edcf0a24bcf32e26@ec2-34-206-252-187.compute-1.amazonaws.com:5432/d9bhkt6un8qqe4';
//
//   const client = new Client({
//     connectionString: connectionString,
//   });
//
//   module.exports = client;
//
// const { Pool, Client } = require('pg');

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'i2m19axtga',
  host: 'localhost',
  port: 5432,
  database: 'deliverydb'
});

module.exports = pool;
