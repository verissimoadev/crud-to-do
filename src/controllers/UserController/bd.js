const pg = require('pg')

async function connect(params) {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://rbsvouen:vdv4e89fdF_PeQhzOjhtdN9yzCs1Se0y@mahmud.db.elephantsql.com/rbsvouen"
    })
    global.connection = pool
    return pool.connect()
}

module.exports = connect
