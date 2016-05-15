var express = require('express');
var router = express.Router();

var quizController =require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Quiz'});
});
//router.get('/question',quizController.question);
//router.get('/check', quizController.check);
router.get('/author',function(req,res,next){
	res.render('author',{autor:'Adrián Barbero Rodríguez'});
});
// Autoload de rutas que usen quizId
router.param('quizId', quizController.load); // autoload :quizId
//Definición de rutas de /quizzes
router.get('/quizzes', quizController.index);
router.get('/quizzes/:quizId(\\d+)', quizController.show);
router.get('/quizzes/:quizId(\\d+)/check' , quizController.check);
router.get('/quizzes/new', quizController.new);
router.post('/quizzes', quizController.create);
//router.get('/quizzes/search', quizController.search);
router.get('/quizzes/:quizId(\\d+)/edit', quizController.edit);
router.put('/quizzes/:quizId(\\d+)', quizController.update);
router.delete('/quizzes/:quizId(\\d+)', quizController.destroy);

module.exports = router;
