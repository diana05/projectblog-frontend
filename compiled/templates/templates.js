this["JST"] = this["JST"] || {};

this["JST"]["#app-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="sidebar"></div><div id="container" class="container"></div><div id="footer"><li>Create by Diana</li><p>Contact</p><p>Numar telefon: 0245 /677492</p><p>Strada: Mihai Bravu ,nr 4</p></div>';

}
return __p
};

this["JST"]["#contact-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span>Contact</span>';

}
return __p
};

this["JST"]["#creareCommentariu-item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span><h2>Comentariu</h2><h5>Continut</h5>' +
__e( model.content ) +
'</span>';

}
return __p
};

this["JST"]["#creareCommentariu-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Creaza comentariu</h2><div class="input-group"><textarea id="commentContent" placeholder="Continut articol" aria-describedby="basic-addon1" class="text form-control"></textarea></div><br/><button id="saveButton" class="btn btn-default">Save</button>';

}
return __p
};

this["JST"]["#createArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Create new article</h2><div class="input-group"><input id="articleTitle" placeholder="Titlu articol" aria-describedby="basic-addon1" class="text form-control"/></div><br/><div class="input-group"><textarea id="articleDescription" placeholder="Descriere articol" aria-describedby="basic-addon2" class="text form-control"></textarea></div><br/><div class="input-group"><textarea id="articleContent" placeholder="Continut articol" aria-describedby="basic-addon3" class="text form-control"></textarea></div><br/><button id="saveButton" class="btn btn-default">Save</button>';

}
return __p
};

this["JST"]["#despre-mine-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--Created by User on 01.10.2015.-->';

}
return __p
};

this["JST"]["#home-item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span><h2>Articole</h2><h5>Titlu articol</h5>' +
__e( model.title ) +
'<hr/><h5>Descriere articol</h5>' +
__e( model.description ) +
'<hr/><h5>Continut</h5>' +
__e( model.content ) +
'<hr/><h5>Date</h5>' +
__e( model.date ) +
'<hr/><h5>Last date</h5>' +
__e( model.lastDate ) +
'<h5>Comments details</h5><br/><span>' +
__e( model.content ) +
'<span></span>' +
__e( model.articleId ) +
'</span></span>';

}
return __p
};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<body><div class="container1"></div><br/><div id="myCarousel" data-ride="carousel" float="center" class="carouselslide"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li><li data-target="#myCarousel" data-slide-to="4"></li></ol><div role="listbox" class="carousel-inner"><div class="item active"><img src="../../static/1.jpg"/></div><div class="item"><img src="../../static/2.jpg"/></div><div class="item"><img src="../../static/3.jpg"/></div><div class="item"><img src="../../static/4.jpg"/></div><div class="item"><img src="../../static/5.jpg"/></div></div><a href="#myCarousel" role="botton" data-slide="prev" class="left carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a href="#myCarousel" role="botton" data-slide="next" class="right carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div><div id="container2"><br/><button id="createArticleButton" class="btn btn-default">See more</button><br/><button id="createArticleButton" class="btn btn-default">Creare articol</button></div></body>';

}
return __p
};

this["JST"]["#navigation-navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-inverse"><div class="container-fluid"><div><ul class="nav navbar-nav"><li class="active"><a href="#">Acasa</a></li><li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle">Articole</a></li><li><a href="#">Despre mine</a></li><li><a href="#">Contact</a></li></ul></div></div></nav>';

}
return __p
};

this["JST"]["#showArticle-article-comment"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h5>Comments details</h5><span>' +
__e( model.content ) +
'<span>' +
__e( model.articleId ) +
'</span></span>';

}
return __p
};

this["JST"]["#showArticle-article-details"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>This is my article<span>' +
__e( model.title ) +
'</span><span>' +
__e( model.description ) +
'</span></h2>';

}
return __p
};

this["JST"]["#showArticle-article"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="show-article-details"></div><div id="show-article-comments"></div>';

}
return __p
};

this["JST"]["#showArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="show-article-details"></div><div id="show-article-comments"></div>';

}
return __p
};

this["JST"]["#updateArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Update new article</h2><div class="input-group"><input id="updateTitle" placeholder="' +
__e( model.title ) +
'" aria-describedby="basic-addon1" class="text form-control"/></div><br/><div class="input-group"><textarea id="updateDescription" placeholder="' +
__e( model.description ) +
'" aria-describedby="basic-addon2" class="text form-control"></textarea></div><br/><div class="input-group"><textarea id="updateContent" placeholder="' +
__e( model.content ) +
'" aria-describedby="basic-addon3" class="text form-control"></textarea></div><br/><button id="saveButton" class="btn btn-default">Update Article</button><br/><button id="deleteButton" class="btn btn-default">Delete Article</button>';

}
return __p
};