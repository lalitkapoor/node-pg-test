var Pool = require('pg-pool')
var pool = new Pool()

pool.connect()
.then(function(client) {
  client.query('select $1::text as name', ['pg-pool']).then(function(res) {
    client.release()
    console.log('hello from', res.rows[0].name)
  })
  .catch(function(e) {
    client.release()
    console.error('query error', e.message, e.stack)
  })
})

