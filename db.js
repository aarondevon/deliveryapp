const pool = require('pg').Pool;

const pool = new Pool({
  user: 'hnebxrfbdaujot',
  password: '20362abc2771ef0fbc9c4ff32f6ec641ebc7703f4f5bc7e6edcf0a24bcf32e26',
  host: 'ec2-34-206-252-187.compute-1.amazonaws.com',
  port: 5432,
  database: 'd9bhkt6un8qqe4',
});

module.exports = pool;
