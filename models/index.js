var path =require('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite:
// DATABASE_URL = sqlite:///
// DATABASE_STORAGE =quiz.sqlite
//Usar BBDD Postgres:
// DATABASE_URL =postgres://user:passwd@host:port/database
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)\:(.*)\/(.*)/);
var DATABASE_PROTOCOL = url[1];
var DATABASE_DIALECT  = url[1];
var DATABASE_USER     = url[2];
var DATABASE_PASSWORD = url[3];
var DATABASE_HOST     = url[4];
var DATABASE_PORT     = url[5];
var DATABASE_NAME     = url[6];
var DATABASE_STORAGE  =process.env.DATABASE_STORAGE;

//Usar BBDD SQLite: 
var sequelize = new Sequelize(
	 DATABASE_NAME,
	 DATABASE_USER,
	 DATABASE_PASSWORD,
	 { dialect: DATABASE_DIALECT,
	   protocol: DATABASE_PROTOCOL,
	   port:     DATABASE_PORT,
	   host: DATABASE_HOST,
	   storage: DATABASE_STORAGE,
	   omitNull: true
	});

//Importar la definición de la tabla Quiz de quiz.js
var Quiz =sequelize.import(path.join(__dirname,'quiz'));

//Importar la definición de la tabla Comments de comment.js
var Comment = sequelize.import(path.join(__dirname,'comment'));

//Importar la definición de la tabla Users de user.js
var User = sequelize.import(path.join(__dirname,'user'));

//Relaciones entre modelos
Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

exports.Quiz= Quiz; //exportar definición de tabla Quiz
exports.Comment =Comment; // exportar definición de tabla Comments
exports.User = User; //exportar definición de tabla Users