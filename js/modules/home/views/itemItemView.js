define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var ItemCollection = require('../models/itemCollection');

    module.exports = Marionette.ItemView.extend({
        template: '#home-item',
        events: {
            'click #viewMore': 'viewMore',
            'click #deleteArticle': 'deleteArticle',
            'click #updateArticle' : 'updateArticle',
            'click #createArticle' :'creareArticol'
        },

        viewMore: function(){
            Backbone.history.navigate('#show-article/'+this.model.id, true);
        },

        deleteArticle: function() {
            this.model.destroy();
        },
        updateArticle: function(){
            Backbone.history.navigate('#update-article/'+this.model.id, true);
        },
        creareArticol : function(){
            Backbone.history.navigate('#create-article', true);
        }
    });
});
