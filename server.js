const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const hbs = require('hbs');
const expressHbs = require('express-handlebars');
const config = require('./config/secret');
const port = process.env.PORT || 3030;


const app = express();

// mongoose configuration
mongoose.connect(config.database, function(err){
	if (err) console.log(err);
	console.log("connected to the database");
});

// app middlewares
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// app route
const mainRoutes = require('./routes/main');
app.use(mainRoutes);

app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("App listening on port 3030...");
	}
});