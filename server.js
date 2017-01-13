var express = require('express');
var app = express();

// GET '/' => '/public/index.html'
app.use( express.static(__dirname + '/public' ));
app.set('view engine', 'ejs'); // res.render(file) => '/views/file'

app.get('/list', function(req, res){
  var locals = {
    message: 'Hello from Views',
    list:list
  };
  res.render('list', locals);
});

// define a route that returns JSON of list info
// GET '/list.json' => ['Mulder', 'Scully'];
var list = ['Mulder', 'Scully'];

app.get('/list.json', function(req, res){
  res.json(list);
})

var port = 3000;
app.listen(port, function(){
  console.log('Up!');
});
