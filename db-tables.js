const { Client } = require('pg');

const client = new Client({
  host: '35.200.212.230',
  port: 5432,
  database: 'uv',
  user: 'postgres',
  password: '0ZTQYTlmFIBH9BKr7bKC'
});

async function listTables() {
  try {
    await client.connect();
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    console.log('Tables in database:');
    result.rows.forEach(row => {
      console.log(row.table_name);
    });
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

listTables();
