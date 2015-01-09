/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema : true,

  attributes: {
    
    'email' : {
      type: 'string',
      required: true,
      email: true,
      unique: true
    },
    
    'name' : {
      type: 'string',
      required: true
    },
    
    'password' : {
      type: 'string',
      required: true
    } //,

    // toJSON: function() {
    //   var obj = this.toObject();
    //   delete obj.password;
    //   delete obj.confirm_password;
    //   delete obj._csrf;
    //   return obj;
    // }

  }
};

