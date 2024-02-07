const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// POSTリクエストを処理するエンドポイント
app.post('/post', (req, res) => {
    console.log('POSTリクエストを受信しました:', req.body);
    res.send('POSTリクエストを受信しました');
});

// GETリクエストを処理するエンドポイント
app.get('/get', (req, res) => {
    const input_match = req.query.input_match;
    if (input_match === '123') {
        res.send('Match successful');
    } else {
        res.send('Match failed');
    }
});

app.listen(port, () => {
    console.log(`サーバが http://localhost:${port} で起動しました`);
});
