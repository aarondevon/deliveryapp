const { Pool, Client } = require('pg');

const connectionString =
  'postgres://hnebxrfbdaujot:20362abc2771ef0fbc9c4ff32f6ec641ebc7703f4f5bc7e6edcf0a24bcf32e26@ec2-34-206-252-187.compute-1.amazonaws.com:5432/d9bhkt6un8qqe4';

const client = new Client({
  connectionString: connectionString,
});

module.exports = client;
