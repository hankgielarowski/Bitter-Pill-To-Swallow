// was in model view


// var Backbone = require('backbone');
// var _ = require('underscore');
// var tmpl = require('./templates');
// var BitterModel = require('./bitterModel');
//
// module.exports = Backbone.View.extend({
//   tagName: '.article',
//   template: _.template(templates.tweet),
//   events: {
//     'click .submit': 'addTweet'
//   },
//   addTweet: function (event) {
//     event.preventDefault();
//     var newTweet = new bitterModel(this.model.toJSON());
//     newTweet.save();
//
//   initialize: function () {},
//     render: function () {
//     var markup = this.template(this.model.toJSON());
//     this.$el.html(markup);
//     return this;
//   }
// });

//was in collection

// var Backbone = require('backbone');
// var _ = require('underscore');
// var $ = require('jquery');
// var TweetView = require('./bitterCollectionView');
//
// module.exports = Backbone.View.extend({
//   el: '.content',
//   initialize: function(){
//     this.addAll();
//   },
//
//   addOne: function (el) {
//     var modelView = new TweetView({model: el});
//     this.$el.append(modelView.render().el);
//   },
//   addAll: function () {
//     $('.content').html('');
//     _.each(this.collection.models, this.addOne, this);
//   }
// });

// was in bitterModel
//
// var Backbone = require('backbone');
//
// module.exports = Backbone.View.extend({
//   url: 'http://tiny-tiny.herokuapp.com/collections/bitter',
//   idattribute: '_id',
//   initialize: function() {
//
//   }
// });
