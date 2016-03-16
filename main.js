var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var BitterCollectionView = require('./bitterCollectionView');
var BitterCollection = require('./bitterCollection');

$(document).ready(function() {
  var bitterCollection = new BitterCollection();
  new BitterCollectionView({collection: bitterCollection})
})
