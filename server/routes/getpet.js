var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var pg = require('pg');
var connection = require('../modules/connection');


//routes listeners
router.post('/', function(req, res) {
    var animal = req.body.content;
    console.log("animal: ", animal);

    // Store in DB
    pg.connect(connection, function(err, client, done) {
        console.log("pg.connect is a go");
        if (err) {

            console.log(err);
            res.sendStatus(500);
        }

        client.query('INSERT INTO favanimals (name, image, description) ' +
            'VALUES ($1, $2, $3)', [animal.name, animal.image, animal.description],
            function(err, result) {
                done();

                if (err) {
                    console.log("query error: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    });

});

router.get('/', function(req, res) {
    pg.connect(connection, function(err, client, done) {
        console.log("router.get pg.connect is a go");
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }

        client.query("SELECT * FROM favanimals",
            function(err, result) {
                done();
                console.log("router.get client.query is a go");

                if (err) {
                    console.log("select error: ", err);
                    res.sendStatus(500);
                }
                res.send(result.rows);
            });

    });
});
//
// // router.put('/:id', function(req, res) {
// //     var taskID = req.params.id;
// //
// //     pg.connect(connection, function(err, client, done) {
// //         if (err) {
// //             console.log(err);
// //             res.sendStatus(500);
// //         }
// //
// //         client.query("UPDATE tasks SET completed_date = 'NOW()' WHERE id = $1", [taskID],
// //             function(err, result) {
// //                 done();
// //
// //                 if (err) {
// //                     console.log("update error: ", err);
// //                     res.sendStatus(500);
// //                 }
// //
// //                 res.sendStatus(200);
// //             });
// //     });
// // });
//
router.delete('/:id', function(req, res) {
    var animalID = req.params.id;

    pg.connect(connection, function(err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }

        client.query("DELETE FROM tasks WHERE id = $1", [animalID],
            function(err, result) {
                done();

                if (err) {
                    console.log("delete error: ", err);
                    res.sendStatus(500);
                }

                res.sendStatus(202);
            });
    });

});




module.exports = router;
