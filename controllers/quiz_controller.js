// GET /question
exports.question =function(req,res,next){
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
    
  };
  
 
