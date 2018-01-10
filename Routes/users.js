'use strict'

function isAuthenticated(req,res,next)
{
	if(req.user)
		return next();
	else
		return res.status(401).json({error: 'User not authenticated'})
}

module.exports = function (app, passport)
{
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get(['/', '/me'], (req, res) =>
	{
		console.log('home')
		res.send([{name:'test', passport: 'dsfd'}, {name:'toto', passport: 'toto'}]);
	})
	.put(['/', 'me'], (req, res) =>
	{})
	.get('/all', (req, res) =>
	{
		res.send('ok')
	}).delete(['/', '/me'], (req, res) =>
	{
		res.send('home swith home');
	});

	// =====================================
	// SIGNUP ==============================
	// =====================================
	app.post('/sign_up', passport.authenticate('local-signup',
	{
		successRedirect : '/profile',
		failureRedirect : '/signup'
	}))

	// =====================================
	// LOGIN ===============================
	// =====================================
	app.post('/sign_in', passport.authenticate('local-signin'))


	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res)
	{
		req.logout();
		res.redirect('/');
	});





	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	app.put('/update/:id', (req, res) =>
	{})
	app.get('/:id', (req, res) =>
	{})


	// =====================================
	// LOGOUT ==============================
	// =====================================

}
