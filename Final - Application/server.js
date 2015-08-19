var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var savedData = [], currentId = 1;

app.use(express.static('./'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());



//define routing here

app.get('/api/todos', function (req, res) {
    res.json(savedData);
});

app.post('/api/todos', function (req, res) {
    var record = {
        id: ++currentId,
        value: req.body.value,
        done: false
    };
    savedData.push(record);
    res.json(record);
});

app.put('/api/todos/:id', function (req, res) {
    var newRecord = req.body;
    //lodash find, merge
});

var server = app.listen(8080, function () {

  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);

});
