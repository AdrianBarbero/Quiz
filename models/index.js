var path =require('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite:
// DATABASE_URL = sqlite:///
// DATABASE_STORAGE =quiz.sqlite
//Usar BBDD Postgres:
// DATABASE_URL =postgres://user:passwd@host:port/database
var url, storage;

if(!process.env.DATABASE_URL){
	url ="sqlite:///";
	storage="quiz.sqlite";
}else{
	url = process.env.DATABASE_URL;
	storage = process.env.DATABASE_STORAGE || "";
}


//Usar BBDD SQLite:
var sequelize = new Sequelize(url,{storage: storage, omitNuLl :true});

//Importar la definición de la tabla Quiz de quiz.js
var Quiz =sequelize.import(path.join(__dirname,'quiz'));

//Importar la definición de la tabla Comments de comment.js
var Comment = sequelize.import(path.join(__dirname,'comment'));

//Relaciones entre modelos
Comment.belongsTO(Quiz);
Quiz.hasMany(Comment);

exports.Quiz= Quiz; //exportar definición de tabla Quiz
exports.Comment =Comment; // exportar definición de tabla Comments