const database = require('./database.js')
//function logResultOfQuery(result) {

//}

function showFullTable(result, query, database) {
    query = 'SELECT * FROM users;'
}

function showNameTable(query, name, database) {
    query = `SELECT * FROM users WHERE name=${name};`
}


module.exports = { showFullTable, showNameTable }