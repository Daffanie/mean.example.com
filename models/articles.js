var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var slug = require('slug');
var passportLocalMongoose = require('passport-local-mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var Articles = new Schema({
  title: {
    type: String,
    required: [true, 'A title is required'],
  },
  slug: {
    type: String,
    required: [true, 'A slug is required'],
    unique: true
  },
  description: String,
  keyword: String,
  body: String,
  published: {
    type: Date,
  },

  //Create and modified dates
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date

  }
});
  //Auto set the slug prior to validation
Articles.pre('validate', function(next){
  this.slug = slug(this.title).toLowerCase();
  next();
});
// Auto set the modified date prior to save
Articles.pre('save', function(next){
  this.modified = new Date().toISOString();
  next();
});
  
//Add unique validation properties to the model
Articles.plugin(uniqueValidator);

module.exports  = mongoose.model('Articles', Articles);
