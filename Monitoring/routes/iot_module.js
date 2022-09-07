const express = require('express');
const router = express.Router();
const connection = require('./../SQL').connection



router.post('/temperature', async function(req, res, next) {


    console.log(req.body)

   connection.query(`insert into temperature (name, temperature, status) values ('${req.body.name}', ${req.body.temperature}, ${req.body.status})`)


    res.send('respond with a resource');
});

router.post('/light', async function(req, res, next) {


    console.log(req.body)

    connection.query(`insert into light (name, light_level, status) values ('${req.body.name}', ${req.body.light}, ${req.body.status})`)


    res.send('respond with a resource');
});

router.post('/presence', async function(req, res, next) {


    console.log(req.body)

    connection.query(`insert into presence (name, status) values ('${req.body.name}', ${req.body.status})`)


    res.send('respond with a resource');
});


module.exports = router;
