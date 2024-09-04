const express = require("express")
const cors = require("cors")
const pool = require("./database")

const app = express()
app.use(express.json())
app.use(cors())

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

app.listen(4000, () => console.log("Server on localhost:4000"))