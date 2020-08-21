const { Pool } =require('pg')

const pool = new Pool({
  host: 'pgsql',
  user: 'sedme_admin',
  password: 'codedark',
  database: 'sedme_db',
  port: '5432',
})

const getUsers = async (req, res) => {
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows)
  }
  module.exports = {
      getUsers
  }