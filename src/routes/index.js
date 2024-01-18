const acountRouter = require('./acount');
const siteRouter = require('./site');
const shopRouter = require('./shop');

function route(app){
    
    app.use('/acount',acountRouter);
    app.use('/shop',shopRouter);
    app.use('/',siteRouter);
}

module.exports = route;