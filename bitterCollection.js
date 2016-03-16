var Backbone = require('backbone');
var _ = require('underscore');
var bitterModel = require('./bitterModel');
var BitterCollectionView = require('./bitterCollectionView');

module.exports = Backbone.Collection.extend({
  model: bitterModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/bitter',
  initialize: function() {
    console.log('helloooo i"m a new bitter collection')
  }
});
