const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const {createConnection} = require("mysql");

app.use(bodyParser.json())

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'root',
    database:'restaurant',
});

// GET Method for the API

app.get('/items',(req,res) => {
    connection.query('SELECT * FROM items', (error, results) => {
        if (error) {
            console.error('Error retrieving table data:', error);
            res.status(401);
        } else {
            res.json(results);
            res.status(200);
        }
    });
})

app.get('/categories',(req,res) => {
    connection.query('SELECT * FROM categories', (error, results) => {
        if (error) {
            console.error('Error retrieving table data:', error);
            res.status(401);
        } else {
            res.json(results);
            res.status(200);
        }
    });
})


app.get('/formulas',(req,res) => {
    connection.query('SELECT * FROM formulas', (error, results) => {
        if (error) {
            console.error('Error retrieving table data:', error);
            res.status(401);
        } else {
            res.json(results);
            res.status(200);
        }
    });
})

// POST Method for the API

app.post('/items',(req,res) => {
    const {name, description, price, categorie_id} = req.body;
    connection.query(
        'INSERT INTO items (name, description, price, categorie_id) VALUES (?,?,?,?)', [name, description, price, categorie_id], (error, results) => {
            if (error) {
                console.error('Error inserting record:', error);
                res.status(400);
            } else {
                res.status(200).send('Record inserted successfully');
            }
        }
    );
})

app.post('/categories',(req,res) => {
    const { name } = req.body;
    connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
            if (error) {
                console.error('Error inserting record:', error);
                res.status(400);
            } else {
                res.status(200).send('Record inserted successfully');
            }
        }
    );
})

app.post('/formulas',(req,res) => {
    const {name, prix_min, prix_max} = req.body;
    connection.query(
        'INSERT INTO formulas (name, prix_min, prix_max) VALUES (?,?,?)',
        [name, prix_min, prix_max],
        (error, results) => {
            if (error) {
                console.error('Error inserting record:', error);
                res.status(400);
            } else {
                res.status(200).send('Record inserted successfully');
            }
        }
    );
})

// DELETE Method with ID

app.delete('/items/:id', (req, res) => {
    const itemIdUrl = req.params.id;
    connection.query('DELETE FROM items WHERE id = ?', [itemIdUrl], (error, results) => {
        if (error) {
            console.error('Error inserting record:', error);
            res.status(400);
        } else if (results.affectedRows > 0) {
            res.status(200).send('Item deleted successfully!');
        } else {
            res.status(404).send('Item not found');
        }
    });
});

app.delete('/formulas/:id', (req, res) => {
    const itemIdUrl = req.params.id;
    connection.query('DELETE FROM formulas WHERE id = ?', [itemIdUrl], (error, results) => {
        if (error) {
            console.error('Error inserting record:', error);
            res.status(400);
        } else if (results.affectedRows > 0) {
            res.status(200).send('Formulas deleted successfully!');
        } else {
            res.status(404).send('Formulas not found');
        }
    });
});

app.delete('/categories/:id', (req, res) => {
    const itemIdUrl = req.params.id;
    connection.query('DELETE FROM categories WHERE id = ?', [itemIdUrl], (error, results) => {
        if (error) {
            console.error('Error inserting record:', error);
            res.status(400);
        } else if (results.affectedRows > 0) {
            res.status(200).send('Categories deleted successfully!');
        } else {
            res.status(404).send('Categories not found');
        }
    });
});

connection.connect()
app.listen(3001,() => console.log(("Server is running")))