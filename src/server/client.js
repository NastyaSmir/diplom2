const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

const getClients = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createClient = (body) => {
    return new Promise(function(resolve, reject) {
      const { surname, name, patronymic, email, password } = body
      pool.query('INSERT INTO merchants (surname, name, patronymic, email, password) VALUES ($1, $2) RETURNING *', [surname, name, patronymic, email, password], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new client has been added added: ${results.rows[0]}`)
      })
    })
  }
  const deleteClient = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Client deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getClients,
    createClient,
    deleteClient,
  }