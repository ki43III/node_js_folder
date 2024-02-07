const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let waitingMatch = null;
let matchStartTime = null;
const matchTimeout = 10000; // 10秒

// POSTリクエストを処理するエンドポイント
app.post('/post', (req, res) => {
    console.log('POSTリクエストを受信しました:', req.body);
    res.send('POSTリクエストを受信しました');
});

// GETリクエストを処理するエンドポイント
app.get('/get', (req, res) => {
    const input_match = req.query.input_match;
    const currentTime = new Date().getTime();

    if (waitingMatch === null) {
        // 待機中のマッチが存在しない場合
        waitingMatch = input_match;
        matchStartTime = currentTime;
        res.send('Waiting for match...');
    } else if (waitingMatch === input_match) {
        // 待機中のマッチと入力が一致する場合、マッチ成功
        waitingMatch = null; // マッチ成功したので待機中のマッチを破棄
        matchStartTime = null;
        res.send('Match successful');
    } else if (currentTime - matchStartTime > matchTimeout) {
        // 待機中のマッチがタイムアウトした場合
        waitingMatch = null; // タイムアウトしたので待機中のマッチを破棄
        matchStartTime = null;
        res.status(408).send('Match timeout'); // タイムアウトステータスを返す
    } else {
        // 他のマッチと入力が一致しない場合、マッチ失敗
        res.send('Match failed');
    }
});

app.listen(port, () => {
    console.log(`サーバが http://localhost:${port} で起動しました`);
});
