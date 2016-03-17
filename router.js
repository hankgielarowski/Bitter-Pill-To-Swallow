var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterCollectionView');

module.exports = Backbone.Router.extend({
  subview: null,
  routes: {
      "": "homepage",
      "home": "homepage"
  },
  // likes: function () {
  //   var that = this; // constructor context
  //   var likesCol = new LikesCollection();
  //   // collection likesCol is still empty
  //   console.log(likesCol.models.length);
  //   likesCol.fetch().then(function (data) {
  //     console.log(likesCol.models.length);
  //     // data is ready
  //     that.renderSubview(new LikesCollectionView({collection: likesCol}));
  //   });
  // },
  homepage: function () {
    var that = this; // constructor context
    var bitterCollection = new BitterCollection();
    // collection flickrCol is still empty
    console.log(bitterCollection.models.length);
    bitterCollection.fetch().then(function (data) {
      console.log(bitterCollection.models.length);
      // data is ready

      that.renderSubview(new BitterCollectionView({collection: bitterCollection}));
    });
  },
  // blah: function () {
  //   console.log("you have arrived at blah!");
  //   this.renderSubview(new FooterView());
  // },
  renderSubview: function (subview) {

    this.subview && this.subview.remove();

    this.subview = subview;

  }

})
