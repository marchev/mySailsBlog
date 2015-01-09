/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    
    'signup': function (req, res) {
        res.view();
    },

    'processSignup': function (req, res) {

    	User.create(req.params.all(), function userCreated(err, user) {
    		if (err) { 
    			return next(err);
    		}
    		else {
    			res.json(user);
    		}

    	});
    }
	
};

