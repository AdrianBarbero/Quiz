// GET /question
/*exports.question =function(req,res,next){
	var answer =req.query.answer || '';
	var par =req.query.parametro || '';
	
	res.render('quizzes/question',{question:'Capital de Portugal',answer: answer,question1:'Quién descubrió América'});
	
};



// GET /check
  exports.check = function(req,res,next){

  	var answer= req.query.answer ||"";
  	var par =req.query.parametro || "";
  	


  	
    if((par==="Portugal")&&(answer==="Lisboa")){

    result='Correcta';
  	res.render('quizzes/result',{result:result, answer: answer});
  }else if((par==="América")&&(answer==="Cristobal Colón" || answer==="Colón")){
  	result='Correcta';
    res.render('quizzes/result',{result:result, answer: answer});
  }
  else{
  	result='Incorrecta'
  	res.render('quizzes/result',{result:result, answer: answer});
  }
    
  };*/
var models = require('../models');


//GET /quizzes
exports.index= function(req,res,next){
	models.Quiz.findAll().then(function(quizzes){
		res.render('quizzes/index.ejs',{quizzes:quizzes});
	}).catch(function(error){next(error);});
};

//GET /quizzes/:id
  exports.show=function(req,res,next){
  	models.Quiz.findById(req.params.quizId).then(function(quiz){ // Busca la primera pregunta
  	  	if(quiz){
  	  		var answer = req.query.answer || '';
  	  		res.render('quizzes/show',{quiz: quiz, answer:answer});
  	  	}
  	  	else{
  	  		throw new Error('No existe ese quiz en la BBDD.');
  	  	}
  	  }).catch(function(error){next(error);});
  };
  //GET /quizzes/:id/check
  exports.check = function(req,res,next){
  	models.Quiz.findById(req.params.quizId).then(function(quiz){ //Busca la primera pregunta
  		if(quiz){
  			var answer = req.query.answer ||"";
  			var result = answer ===quiz.answer ? 'Correcta' : 'Incorrecta';
  			res.render('quizzes/result',{result :result, answer: answer});
  		}
  		else{
  			throw new Error('No existe ese quiz en la BBDD.');
  		}
  	}).catch(function(error){next(error);});
  };
  //GET /quizzes

  exports.search=function(res,req,next){
  	models.Quiz.findAll({where :["quiz.question like ?", search]}).then(function(quizzes){
  		var search = req.query.search || "";
  		res.render('/quizzes',{search :search});
  		res.render('/quizzes/search',{pregunta : quiz.question});

         }).catch(function(error){next(error);});
  	}
  
  
 
