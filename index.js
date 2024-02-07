const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log('JSONデータを受信しました:', req.body);
    res.send('JSONデータを受信しました');
});

app.listen(port, () => {
    console.log(`サーバが http://localhost:${port} で起動しました`);
});
