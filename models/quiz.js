//Definición del modelo Quiz:

module.exports = function (sequelize, DataTypes){
	return sequelize.define('Quiz',
		                   { question: DataTypes.STRING,
		                   	 answer: DataTypes.STRING
                             });
};
/*<p>
	<a href="/quizzes/<%=quiz.id%>">Inténtelo otra vez </a>
</p>*/