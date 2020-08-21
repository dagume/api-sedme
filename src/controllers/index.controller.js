const { Pool } =require('pg')

const pool = new Pool({
  host: '',
  user: '',
  password: '',
  database: '',
  port: '',
})

const getUsers = async (req, res) => {
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows)
  }
  module.exports = {
      getUsers
  }