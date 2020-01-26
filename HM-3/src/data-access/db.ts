import path from 'path';
const { Pool } = require('pg');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const pool = new Pool({
    connectionString: process.env.DB_CONN
});

pool.connect();

pool.on('connect', () => {
    console.log('connected to the db');
});

export const query = (text: any) => pool.query(text);
