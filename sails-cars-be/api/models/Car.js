/**
 * Car.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  carType:{
		type:'string',
		required:true,
		uppercase:true
	},
	modelYear:{
		type:'integer',
		maxLength:4
	},
	carPrice:{
		type:'string',
		minLength:4,
		contains:'$'
	},
	horsePower:{
		type:'integer'
	},
	countryOfOrigin:{
		type:'string'

	}

  }
};
