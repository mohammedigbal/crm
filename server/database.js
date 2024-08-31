const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "crmadminuser",
    //host: "localhost",
    host: "crm-db-instance.chyi08eiss0b.us-east-1.rds.amazonaws.com"
    port: 5432,
    database: "crm_db"
})

module.exports = pool;