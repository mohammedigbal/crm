import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(express.json());
const url = 'https://main.d31ibbm4im0klm.amplifyapp.com';
app.use(cors({ origin: url }));

const pool = new Pool({
    user: "postgres",
    password: "crmadminuser",
    host: "localhost",
    //host: "crm-db-instance.cncooa6u6jo0.ap-south-1.rds.amazonaws.com",
    port: 5432,
    database: "crm_db"
})

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

app.get("/", (req,res) => {
  res.send("Hello World!!!");
})

app.get("/getLocations", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations ORDER BY LOCATION_NAME');
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
})

app.get("/getConfigValues", async (req, res) => {
    try {
        const { config_type } = req.query; 
        const query = `SELECT id, config_value FROM CONFIGURATIONS WHERE config_type = '${config_type}'`;
        const result = await pool.query(query);
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
})

if (process.env.DEVELOPMENT) {
  app.listen(4000, () => console.log("Server on localhost:4000"));
}

export const handler = serverless(app);
