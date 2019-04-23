let express=require('express');
let app=express();
//view engines
function formatDate(date) {
    return date.toLocaleString("en-US");
}

let expressHbs = require('express-handlebars');
var paginateHelper = require('express-handlebars-paginate');
app.engine('hbs', expressHbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/',
	helpers: {
        paginate: paginateHelper.createPagination,
        formatDate: formatDate
    }
}));
app.set('view engine', 'hbs');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//set static folder
app.use(express.static(__dirname +'/public'));

var adminRouter=require('./routes/admin');
app.use('/admin',adminRouter);

var clientRouter=require('./routes/client');
app.use('/',clientRouter);

var manageClientRouter=require('./routes/manageUser');
app.use('/users',manageClientRouter);

var reviewRouter=require('./routes/reviews');
app.use('/reviews',reviewRouter);
// var models = require('./models');
// app.get('/sync', function(req, res){
// 	models.sequelize.sync().then(function(){
// 		res.send('database sync completed!');
// 	});
// });


// Handle 500 Internal Server Error
app.use(function(req, res){
	res.locals.message = 'File Not Found';
	res.status(404).render('index');
});

// Handle 500 Internal Server Error
app.use(function(err, req, res, next) {
	console.log(err);
	res.locals.message = 'Internal Server Error';
	res.status(500).render('index');
});

app.set('port',(process.env.PORT||8000));

app.listen(app.get('port'),()=>{
    console.log('Server is listening on port '+ app.get('port'));
});