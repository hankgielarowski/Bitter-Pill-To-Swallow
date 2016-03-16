var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var TweetView = require('./bitterView');

module.exports =  Backbone.View.extend({
  el: '.article',
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function (el) {
    var modelView = new TweetView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {
    $('.content').html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
