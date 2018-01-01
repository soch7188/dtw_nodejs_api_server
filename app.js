var express = require('express'),
    app = express(),
    mysql = require('mysql'),
    http = require('http'),
    port = process.env.PORT || 3000


var con = mysql.createConnection({
    host: "fypinstance.csbqmphhsfqb.ap-northeast-2.rds.amazonaws.com",
    port: 3306,
    database: "dtw",
    user: "password",
    password: "password"
});

con.connect(function(err) {
    if (!err){
	console.log("Connected! \n\n");
    } else {
	console.log("Error connecting database ... \n\n");
    }
});


app.get('/btc', function (req, res){
    con.query('SELECT * FROM priceVolume ORDER BY _id DESC LIMIT 1', function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        res.status(200).send(JSON.stringify(result));
    });
})

// router.get('/btc', function (req, res) {
//
//     var options = {
//         host: url,
//         port: 80,
//         path: '/',
//         method: 'POST'
//     };
//
//     http.request(options, function(res) {
//
//         console.log('STATUS: ' + res.statusCode);
//         console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//             console.log('BODY: ' + chunk);
//         });
//     }).end();
//
//
//     User.find({}, function (err, users) {
//         if (err) return res.status(500).send("There was a problem finding the users.");
//         res.status(200).send(users);
//     });
// });

app.listen(port);
console.log('API server started on: ' + port);
