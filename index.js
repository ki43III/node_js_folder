const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
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
