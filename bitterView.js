var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./templates');
var BitterModel = require('./bitterModel');

module.exports = Backbone.View.extend({
  el: '.content',
  template: _.template(tmpl.addTweet),
  events: {
    'click .submit': 'addTweet'
  },
  addTweet: function (event) {
    event.preventDefault();
    var newTweet = new bitterModel(this.model.toJSON());
    newTweet.save();
  },

  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
