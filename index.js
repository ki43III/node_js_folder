const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
let resistdata1s = [];
let requestdat2s = [];


app.post('/', (req, res) => {
    //jsonデータの中身を表示
    //console.log(req.body.value);
    if (req.body.key == 1) {
        resistdata1s = req.body;
    }

    if (req.body.key == 2) {
        requestdat2s = req.body;
    }

    if (req.body.key == 0) {
        if (req.body.name == 0) {
            res.json(resistdata1s);
        }
        if (req.body.name == 1) {
            res.json(requestdat2s);
        }
    }

    //console.log('JSONデータを受信しました:', req.body);
    //console.log(res.body.length);

});

app.listen(port, () => {
    console.log(`サーバが http://localhost:${port} で起動しました`);
});
