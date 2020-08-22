const { Pool } =require('pg') //require dependencia de pg

//Conexion a la DB
const pool = new Pool({
  host: 'pgsql',
  user: 'sedme_admin',
  password: 'codedark',
  database: 'sedme_db',
  port: '5432',
})

const getUsers = async (req, res) => {
  try {
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows)    
  } catch (error) {
    console.error(error);
  }
  }
  module.exports = {
      getUsers
  }