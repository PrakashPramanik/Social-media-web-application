const express = require('express');
const app = express();
const port = 3000;

// use express router
app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});