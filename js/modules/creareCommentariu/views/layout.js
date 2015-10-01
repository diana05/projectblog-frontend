define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateCommentModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'create-comment',
        template: '#createComment-layout',

        events :{
            'click #saveButton' : 'saveNewComment'
        },

        initialize : function(){
            this.model = new CreateCommentModel();
        },

        saveNewArticle : function(){
            var commentContent = $('#content').val();


            this.model.set('content',commentContent);


            this.model.save();
        }
    });
});
