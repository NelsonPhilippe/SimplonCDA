const sql = require("mysql")
const connection = sql.createConnection({
    user: 'root',
    password: 'strong',
    database: 'simplonhakatoniot',
    host: '127.0.0.1',
    port: 3306,
})

exports.connect = () => {
    connection.connect()
}

exports.connection = connection