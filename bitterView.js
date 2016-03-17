var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./templates');
var $ = require('jquery');
var BitterModel = require('./bitterModel');
var BitterCollection = require('./bitterCollection');


module.exports = Backbone.View.extend({
  collection: BitterCollection,
  el: '.stuff',
  template: _.template(tmpl.addTweet),
  events: {
    'click .submit': 'addTweet',
    // this.listenTo(this.collection, 'add', this.addAll)
  },
  addTweet: function (event) {
    event.preventDefault();
    var newTweetFromHtml = {
     title: $('textarea[name="title"]').val(),
     user: $('input[name="user"]').val(),
     tweet: $('input[name="tweet"]').val(),
   }
    var newTweet = new BitterModel(newTweetFromHtml);
    //  this.collection.add(newTweet);
    newTweet.save();
    this.collection.add(newTweet);

  },

  initialize: function () {
    window.glob = this;

  },
  render: function () {
    var markup = this.template;
    this.$el.html(markup);
    return this;
  }
});
