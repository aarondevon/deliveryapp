//const pool = require('pg').Pool;
//const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: 'hnebxrfbdaujot',
//   password: '20362abc2771ef0fbc9c4ff32f6ec641ebc7703f4f5bc7e6edcf0a24bcf32e26',
//   host: 'ec2-34-206-252-187.compute-1.amazonaws.com',
//   port: 5432,
//   database: 'd9bhkt6un8qqe4',
// });

// const connectionString =
//   'postgres://hnebxrfbdaujot:20362abc2771ef0fbc9c4ff32f6ec641ebc7703f4f5bc7e6edcf0a24bcf32e26@ec2-34-206-252-187.compute-1.amazonaws.com:5432/d9bhkt6un8qqe4';

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL + '?ssl=true',
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

module.exports = client;
// const pool = new Pool({
//   connectionString: connectionString,
// });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });
// const client = new Client({
//   connectionString: connectionString,
// });

// client.connect();
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

// module.exports = pool;
