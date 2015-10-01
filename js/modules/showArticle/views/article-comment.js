define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports= Marionette.ItemView.extend({
        id: 'article-comments',
        template : '#showArticle-article-comment'
    })
});
