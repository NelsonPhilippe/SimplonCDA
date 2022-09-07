const express = require('express');
const router = express.Router();
const connection = require('./../SQL').connection
const util = require('util');

const query = util.promisify(connection.query).bind(connection)

/* GET home page. */
router.get('/', async function(req, res, next) {

    const result_temp = Object.values(JSON.parse(JSON.stringify(await query(`select *, max(last_verif) from temperature`))))
    const result_light = Object.values(JSON.parse(JSON.stringify(await query(`select *, max(last_verif) from light`))))
    const result_presence = Object.values(JSON.parse(JSON.stringify(await query(`select *, max(last_verif) from light`))))

    let module_info = []

    result_temp.forEach((value) => {

        const status = (value.status === 1) ? "on" : 'off';
        let obj = {
            type: "Capteur de température",
            name : value.name,
            info : "température : " + value.temperature + " degrès",
            status : status,
            date : value.last_verif
        }
        module_info.push(obj)
    })

    result_light.forEach((value) => {

        const status = (value.status === 1) ? "on" : 'off';
        let obj = {
            type: "Capteur de lumière",
            name : value.name,
            info : "lumènes : " + value.light_level + " lumène",
            status : status,
            date : value.last_verif
        }
        module_info.push(obj)
    })

    result_presence.forEach((value) => {

        const status = (value.status === 1) ? "on" : 'off';
        let obj = {
            type: "Capteur de presence",
            name : value.name,
            status : status,
            date : value.last_verif
        }
        module_info.push(obj)
    })


    console.log(module_info)

    res.render('index', { data: module_info });
});

module.exports = router;
