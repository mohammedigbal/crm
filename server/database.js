const {Pool} = require("pg");

const pool = new Pool({
    user: "admin",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "crm"
})

module.exports = pool;