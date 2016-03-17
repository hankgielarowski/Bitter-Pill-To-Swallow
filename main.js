var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var BitterCollectionView = require('./bitterCollectionView');
var BitterCollection = require('./bitterCollection');
var AddBitterView = require('./bitterView');
var Router = require('./router');

$(document).ready(function() {
  var bitCol = new BitterCollection();
  var addBitterView = new AddBitterView({collection: bitCol});
  addBitterView.render();
  bitCol.fetch().then(function(data) {
    new BitterCollectionView({collection: bitCol})

  // new Router();
  //   Backbone.history.start({pushstate: true});
  })
// new Router();
//   Backbone.history.start({pushstate: true});
});
