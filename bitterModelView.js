var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  tagname: 'li',
  template: _.template(tmpl.tweet),
  events: {
  'click .delete': 'deleteTweet',
},
deleteTweet: function(){
  this.model.destroy();
},

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
