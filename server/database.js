const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "crmadminuser",
    //host: "localhost",
    host: "postgres://postgres:crmadminuser@crm-db-instance.chyi08eiss0b.us-east-1.rds.amazonaws.com/postgres"
    port: 5432,
    database: "postgres"
})

module.exports = pool;