define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ArticleDetails = require('./article-details');
    var ArticleComments= require('./article-comments');

    var ArticleModel = require('../models/articleModel');
    var Comments = require('../models/comments');

    module.exports =Marionette.Layout.extend({
        id:'Article-layout',
        template :'#showArticle-layout',

        events:{
            'click #deleteArticle' :'deleteArticle',
            'click #createComment' :'createComment',
            'click #updateArticle': 'updateArticle'
        },

        regions :{
            showArticleDetails :'#show-article-details',
            showComments :'#show-article-comments'
        },

        initialize : function(options){
            this.id = options.id
        },

        deleteArticle: function(){
            this.model.destroy();
        },
        createComment:function(){
            Backbone.history.navigate('#create-article', true);

        },
        updateArticle :function(){
            Backbone.history.navigate('#update-article/'+this.model.id, true);
        },

        onRender :function (){
            var self= this;
            var articleModel = new ArticleModel({
                id: this.id
            });

            articleModel.fetch().then(function(options){
                self.showArticleDetails.show(new ArticleDetails({
                    model: new Backbone.Model(options)
                }));
            }) ;

            var comments= new Comments();
            comments.id = this.id;

            comments.fetch().then(function(options){
                self.showComments.show(new ArticleComments({
                    collection: new Backbone.Collection(options)
                }));
            });
        }
    });
});
