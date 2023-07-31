const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const methodOverride = require('method-override');
const db = require('./config/data')
const route = require('./routes');
const moment = require('moment');
var bodyParser = require('body-parser');
const cors = require('cors');




db.connect();

app.use(express.static(path.join(__dirname, 'public')));


app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({extended : true}));

app.use(express.json());

app.use(methodOverride('_method'));

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a + b,
    }

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'res/views'));



route(app);



app.listen(1808,function(){console.log('app listening on http://localhost:1808')});