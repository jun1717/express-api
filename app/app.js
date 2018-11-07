// ライブラリ読み込み
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;


app.get('/api/v1/', function (req, res) {
    res.json({
        message: 'Hello'
    });
});

app.listen(port, console.log('listen on port ' + port));
