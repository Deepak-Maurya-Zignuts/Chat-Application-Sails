/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type:'string',
      required: true,
      unique: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type:'string',
      required: true,
    },
    isActive: {
      type: 'boolean',
      defaultsTo: false,
    },
    authToken: {
      type:'string',
    }

  },

};

