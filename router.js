// var Backbone = require('backbone');
// var BitterCollection = require('./bitterCollection');
// var BitterCollectionView = require('./bitterCollectionView');
//
// module.exports = Backbone.Router.extend({
//   subview: null,
//   routes: {
//       "": "homepage",
//       "home": "homepage"
//   },
//
//   homepage: function () {
//     var that = this;
//     var bitterCollection = new BitterCollection();
//
//     console.log(bitterCollection.models.length);
//     bitterCollection.fetch().then(function (data) {
//       console.log(bitterCollection.models.length);
//
//
//       that.renderSubview(new BitterCollectionView({collection: bitterCollection}));
//     });
//   },
//   renderSubview: function (subview) {
//
//     this.subview && this.subview.remove();
//
//     this.subview = subview;
//
//   }
//
// })
