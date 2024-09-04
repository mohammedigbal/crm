const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "crmadminuser",
    //host: "localhost",
    host: "crm-db-instance.cncooa6u6jo0.ap-south-1.rds.amazonaws.com",
    port: 5432,
    database: "crm_db"
})

module.exports = pool;