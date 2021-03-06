var models = require('../models');
var Sequelize = require('sequelize');

/*Auteticar un usuario si usuario esta en tabla users
 *
 *Devuelve Promesa: busca usuario con login y password.
 * -autenticación ok, devuelve objeto USer con then(..)
 * -autent. falla. promesa satisfecha pero devuelve null
 */
 var authenticate = function(login, password) {

 	return models.User.findOne({where: {username: login}}).then(function(user) {
 		if(user && user.verifyPassword(password)) {
 			return user;
 		} else{
 			return null;
 		}
 	});
 };

exports.loginRequired = function(req, res, next) {
	if(req.session.user){
		next();
	}else{
		res.redirect('/session?redir=' + (req.param('redir') || req.url));
	}
}
 // GET /session  --Formulario de login
 exports.new = function(req, res, next){
 	res.render('session/new');
 };

 // POST /session  -- Crear sesion si usuaario ok
 exports.create = function(req, res, next) {
     
    var redir    = req.body.redir || '/' ;
 	var login    = req.body.login;
 	var password = req.body.password;

 	authenticate(login, password).then(function(user) {
 		if(user) {
 			//Crear req.session.user y guardar campos id y username
 			//La sesión se define por la existencia de: req.session.user
 			req.session.user = {id:user.id, username:user.username, isAdmin:user.isAdmin};

 			res.redirect("/"); // redirección a la raiz
 		}else{
 			req.flash('error', 'La autenticación ha fallado. Reinténtelo otra vez.');
 			res.redirect("/session"); // redirect a login
 		}
 	}).catch(function(error) {
 		req.flash('error', 'Se ha producido un error:' +error);
 		next(error);
 	   });
 	 };


// DELETE / session   --Destruir sesion
exports.destroy = function(req, res, next) {

	delete req.session.user;

	res.redirect("/session"); // redirect a login.
};

exports.adminOrMyselfRequired =function(req, res, next){

	var isAdmin = req.session.user.isAdmin;
	var userId  = req.user.id;
	var loggedUSerId= req.session.user.id;

	if(isAdmin || userId === loggedUserId) {
		next();
	}else{
		console.log('Ruta prohibida: no es el usuario logueado, ni un administrador.');
		res.send(403);
	}
};

exports.adminAndNotMyselfRequired= function(req, res, next){

	var isAdmin = req.session.user.isAdmin;
    var userId  = req.user.id;
    var loggedUSerId = req.session.user.id;

    if (isAdmin && userId !== loggedUSerId) {
    	next();
    }else{
    	console.log('Ruta prohibida: no es el usuario logueado, ni un administrador.');
    	res.send(403);
    }
};