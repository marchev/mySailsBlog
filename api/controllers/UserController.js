/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    'test' : test,
    'signup' : signup,
    'processSignup' : processSignup
}

/**
 * I am just a variable.
 */
var myNameIsVariable = 'myNameIsVariable';

/**
 * Renders the signup page.
 * @param req The reqest.
 * @param res The response.
 */    
function signup(req, res) {
        res.locals.flash = _.clone(req.session.flash);
        res.view();
        req.session.flash = {};
}

/**
 * Processes a signup request.
 * @param req The request.
 * @param res The response.
 * @author marchev
 */
function processSignup(req, res) {
	User.create(req.params.all(), function userCreated(err, user) {
		if (err) {
            req.session.flash = {
                err: err
            }
            console.log(err);

            return res.redirect('/signup');
		}
		else {
            req.session.flash = {};
			res.json(user);
		}

	});
}

/**
 * Just a test method.
 */
function test(req, res) {
        var userHelper = require('../helpers/UserHelper.js');
        userHelper.sayHelloWorld();
        res.send(200);
}