const { Pool } = require('pg');
const conString = 'postgres://qgbzizer:olDZG7yx2EWGGhecjkfV1uxfomk33MVX@balarama.db.elephantsql.com:5432/qgbzizer';

const pool = new Pool({
    connectionString: conString
});

pool.connect();

pool.on('connect', () => {
    console.log('connected to the db');
});

export const query = (text: any) => pool.query(text);
