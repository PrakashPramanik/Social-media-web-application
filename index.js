const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set( 'layout extractScripts',true)

app.use(express.static('public'));


// use express router
app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});