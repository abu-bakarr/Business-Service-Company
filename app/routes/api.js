var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Person = require('../models/persons');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/jason', (req, res) => {

    const query = req.query;

    Person.find(query)
        .then(persons => {
            res.json({
                confirm: "Succes",
                data: persons
            })
        })
        .catch(err => {
            res.render({
                confirm: 'fail',
                data: err.message
            })
        })
});
router.get('/jason/update', (req, res) => {
    var query = req.query; // require id, key=value
    var personId = query.id;
    delete query['id'];

    Person.findByIdAndUpdate(personId, query, { new: true })
        .then(person => {
            res.json({
                confirm: "Succes",
                data: "Update page"
            });
        })
        .catch(err => {
            res.render({
                confirm: 'fail',
                data: err.message
            })
        })

});

router.post('/jason', (req, res) => {

    Person.create(req.body)
        .then(person => {
            res.json({
                confirm: 'success',
                data: person
            });
        })

    console.log(req.body);
})


module.exports = router;