define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var ItemCollection = require('../models/itemCollection');
    var ItemCollectionView = require('./itemCollectionView');

    module.exports = Marionette.ItemView.extend({
        id: 'home',
        template: '#home-layout',

            events:{
                'click #createArticleButton' : 'creareNewArticle'

            },

         initialize: function(){
            var self = this;
            Marionette.ItemView.prototype.initialize.apply(this,arguments);
            this.collection = new ItemCollection();
            this.collection.fetch().then(function(){
                var collectionView = new ItemCollectionView({collection: self.collection});
                self.$el.find('#container2').html(collectionView.render().$el);
            })
        },

        creareNewArticle: function(){
            Backbone.history.navigate('#create-article', true);
        }
    });
});