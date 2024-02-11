const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
let resistdata1s = { "key": "1", "name": "1", "id": 123, "x": 0, "y": 0, "z": 0 };
let requestdat2s = { "key": "2", "name": "2", "id": 123, "x": 0, "y": 0, "z": 0 };

app.post('/', (req, res) => {
    //jsonデータの中身を表示

    if (req.body.key == 1) {
        resistdata1s = req.body;
        res.json(requestdat2s);
    }

    if (req.body.key == 2) {
        requestdat2s = req.body;
        res.json(resistdata1s);
    }
    /*
        if (req.body.key == 0) {
            if (req.body.name == 0) {
                res.json(resistdata1s);
            }
            if (req.body.name == 1) {
                res.json(requestdat2s);
            }
        }
    */
    /*console.log(req.body);
    res.json(req.body);
    */
    //console.log(resistdata1s);
    console.log(resistdata1s);
});

app.listen(port, () => {
    console.log(`サーバが http://localhost:${port} で起動しました`);
});
