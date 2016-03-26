
var passport = require('passport');

module.exports = function(app) {
    
    app.get('/auth/github', passport.authenticate('github'));

    app.get('/auth/github/callback', passport.authenticate('github', {
    	successRedirect: '/'
	}));

	app.get('/logout', function(req, res) {
	  req.logOut(); // exposto pelo passport
	  res.redirect('/');
	});

	app.get('/', function(req, res, next) {

		console.log("entrou na verificação de autenticação");
		if(req.isAuthenticated()) {

			// permite que outras rotas sejam processadas
			return next();
		} else {

			// renderiza auth.ejs
			res.render("auth");
		}
	});
}