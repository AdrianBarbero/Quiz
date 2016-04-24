var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');

var routes = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/*app.get('/questions',function(req,res){
  res.send('<html><head><title>Quiz</title></head>'
    +'<body>'
    +'<form method="get" action="/check">'
          +'Pregunta : <%= question %> <br>'
          
          +'<input type="text" name="answer" value="<%= answer %>"placeholder="Responda aquí" />'
          +'<input type="hidden" name="parametro" value="Portugal"/>'
          +'<input type="submit" value="Comprobar">'

            

    +'</form>');
    +'<form method="get" action="/check">'
          +'Pregunta : <%= question1 %> <br>'
          
          +'<input type="text" name="answer" value="<%= answer %>" placeholder="Responda aquí" />'
          +'<input type="hidden" name="parametro" value="América"/>'
          +'<input type="submit" value="Comprobar">'

            

        +'</form>'
       +'</body>'
       +'</html>'

});
app.get('/result',function(req,res){
  var answer= req.query.answer;
  var oculto=requ.query.parametro;
  var result;
   if(oculto==="América"){
    answer="Cristobal Colón";
    if(answer.match(/(Cristobal)? (Col[oó]n)/i) !== null){
      result="correcta";
    }else{
      result="incorrecta";
    }
   }else if(hid==="Portugal"){
    answer="Lisboa";
    if(answ.match(/lisboa/i)!== null){
      result="correcta";
    }else{
      result="incorrecta";
    }
   }
   if(result==="correcta"){
    res.send("<html><head><title> Quiz </title></head>");
   }
});*/

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
