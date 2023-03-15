var express = require ('express')
var ejs = require('ejs')

var app = express();
app.use(express.static('public')); // this is the important step as it tells the javascript to read the html from public folder. 
app.set('view engine', 'ejs'); //now the html files will use extentions of .ejs instead of .html

app.listen(1000); // it will run on localhost:1000

app.get('/', function(req,res){
    res.render('pages/index'); // dont mention the 'views/pages/index' because the engine already knows that it is in the views folder. Also mention the file without the extention. 
});