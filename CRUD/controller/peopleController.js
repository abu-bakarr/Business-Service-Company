var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
// var People = mongoose.model('People');
var People = require('../model/people.model');

router.get('/people', (req, res) => {
    res.render('people/addOrEdit', {
        viewTitle: "Insert People",
        peoples: req.body

    });
});

router.post('/people', (req, res) => {
    if (req.body._id == "") {
        insertRecord(req, res);
    } else {
        updateRecord(req, res);
    }

});

function insertRecord(req, res) {
    var people = new People();

    people.name = req.body.name;
    people.email = req.body.email;
    people.location = req.body.location;
    people.phone = req.body.phone;
    people.message = req.body.message;
    people.save((err, doc) => {
        if (!err)
            res.redirect('/list');
        else {
            if (err.name == 'validationError') {
                handleValidationError(err, req.body);
                res.render('people/addOrEdit', {
                    viewTitle: "Insert People",
                    peoples: req.body,
                });
            } else {
                console.log('Error during insertion' + err);
            }
        }

    });
}

function updateRecord(req, res) {
    People.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('people/list');
        } else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render('people/addOrEdit', {
                    viewTitle: "Insert People",
                    peoples: req.body,
                });
            } else {
                console.log('Error during insertion' + err);
            }
        }
    })

}


router.get('/list', (req, res) => {
    People.find((err, doc) => {
        if (!err) {
            res.render('people/list', {
                viewTitle: "List of People",
                peoples: doc,

            });
        } else {
            console.log('Error during insertion' + err);
        }
    });
});

function handleValidationError(err, body) {
    for (var field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['nameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/people/:id', (req, res) => {
    People.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('people/addOrEdit', {
                viewTitle: "Update People",
                peoples: doc,
            });
        } else {
            console.log('Error during insertion' + err);
        }
    });
});

router.get('/people/delete/:id', (req, res) => {
    People.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.render('people/list', {
                viewTitle: "Insert people",
                peoples: doc
            });
        } else {
            console.log('Error during insertion' + err);
        }
    });
});

module.exports = router;