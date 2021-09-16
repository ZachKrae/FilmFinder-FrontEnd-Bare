const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: '',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM FilmShowings";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.listen(3001, () => {
    console.log('running on port 3001');
});