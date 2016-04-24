// GET /question
exports.question =function(req,res,next){
	var answer =req.query.answer || '';
	var par =req.query.parametro || '';
	//var answer1=req.query.answer1 || '';
	//var question1;
	res.render('quizzes/question',{question:'Capital de Portugal',answer: answer,question1:'Quién descubrió América'});
	//res.render('quizzes/question',{question:'Quién descubrió América',answer:answer});
};
/*exports.question1 =function(req,res,next){
   var answer =req.query.answer || '';
   res.render('quizzes/question',{question:'Quién descubrió América',answer:answer});
};*/


// GET /check
  exports.check = function(req,res,next){

  	var answer= req.query.answer ||"";
  	var par =req.query.parametro || "";
  	


  	
  	//if((answer==="Lisboa")&&(answer==="Cristobal Colón")){
    if((par==="Portugal")&&(answer==="Lisboa")){

    result='Correcta';
  	res.render('quizzes/result',{result:result, answer: answer});
  }else if((par==="América")&&(answer==="Cristobal Colón")){
  	result='Correcta';
    res.render('quizzes/result',{result:result, answer: answer});
  }
  else{
  	result='Incorrecta'
  	res.render('quizzes/result',{result:result, answer: answer});
  }
    //var result1 =((answer==='Cristobal Colón') ? 'Correcta' : 'Incorrecta');
  	//res.render('quizzes/result',{result1:result1});
  };
  /*exports.check1 =function(req,res,next){
   var answer= req.query.answer ||"";
   var result =((answer==='Cristobal Colón') ? 'Correcta' : 'Incorrecta');
  	res.render('quizzes/result',{result:result,answer:answer});

  };*/
 
