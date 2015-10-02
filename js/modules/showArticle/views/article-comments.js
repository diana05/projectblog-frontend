define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var ArticleComment= require('./article-comment');
    var NoComments = require('./no-comments');

    module.exports= Marionette.CollectionView.extend({
       itemView : ArticleComment,
        emptyView: NoComments

    })
});

