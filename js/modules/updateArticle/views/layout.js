define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var UpdateArticleModel = require('../models/updateModel');

    module.exports = Marionette.ItemView.extend({
        id: 'create-article',
        template: '#createArticle-layout',

        events :{
            'click #saveButton' : 'saveNewArticle',
            'click #deleteButton' :'deleteNewArticle'
        },

        initialize : function(options){
            this.model = new UpdateArticleModel({id: options.id});
            this.model.fetch();


            this.listenTo(this.model, 'destroy', this.goHome);
        },
        goHome: function(){
          Backbone.history.navigate('#home',true);
        },


        saveNewArticle : function(){
            var articleTitle = $('#updateTitle').val();
            var articleDescription = $('#updateDescription').val();
            var articleContent = $('#updateContent').val();

            this.model.set('title',articleTitle);
            this.model.set('description',articleDescription);
            this.model.set('content',articleContent);

            this.model.save();
        },
        deleteNewArticle: function(){
            this.model.destroy().then(function(){
                this.render();
            })
        }
    });
});