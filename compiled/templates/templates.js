this["JST"] = this["JST"] || {};

this["JST"]["#app-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="sidebar"></div><div id="container" class="container"></div><div id="footer"></div>';

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

this["JST"]["#home-item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( model.title ) +
'<br/>' +
__e( model.description ) +
'<br/>' +
__e( model.content ) +
'<br/>' +
__e( model.date ) +
'\n' +
__e( model.lastDate );

}
return __p
};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<body><br/><div id="myCarousel" data-ride="carousel" float="center" class="carouselslide"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li><li data-target="#myCarousel" data-slide-to="4"></li></ol><div role="listbox" class="carousel-inner"><div class="item active"><img src="../../static/1.jpg"/></div><div class="item"><img src="../../static/2.jpg"/></div><div class="item"><img src="../../static/3.jpg"/></div><div class="item"><img src="../../static/4.jpg"/></div><div class="item"><img src="../../static/5.jpg"/></div></div><a href="#myCarousel" role="botton" data-slide="prev" class="left carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a href="#myCarousel" role="botton" data-slide="next" class="right carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div><div class="row"><h1>Cele mai vizionate articole</h1></div><div id="content1" class="col-md-4"><h3>Despre viata</h3><p>Fiecare om nu intra in viata noastra intamplator. Si, la fel de intamplator, nu iese din ea. Fiecare poveste, fiecare sarut si imbratisare isi au rostul lor, scopul lor si invatatura pentru o zi sau o viata intreaga. Ceea ce traim azi ne poate convinge de anumite lucruri, ceea ce iubim azi ne poate schimba pentru totdeauna. Oamenii sunt facuti nu doar ca sa isi traiasca viata lor, dar sa faca parte si din viata altora, sa joace acel rol predestinat. Pana la urma, suntem gramada de oameni pe care i-am intalnit, discutiile aprinse sau de suflet pe care le-am avut cu ei, povestile pe care le-am ascultat si amintirile care au ramas...<a href="#">Learn more<form role="form"><div class="form-group"><label for="comment">Comment</label><textarea id="comment" rows="5" class="form-control"></textarea></div></form></a></p></div><div id="content2" class="col-md-4"><h3>Oamenii stiu de ce...</h3><p>Eu Cred..</p><p>Ca nu trebuie sa ne schimbam prietenii,</p><p>Daca intelegem ca prietenii se schimba.</p><p>Eu Cred...</p><p>Ca indiferent cat de bun este un prieten,</p><p>El tot te va rani, din cand in cand,</p><P>Iar tu trebuie sa-l ierti pentru asta.</P><p>Eu Cred...</p><p>Ca o adevarata prietenie continua sa creasca,</p><p>Chiar si la distantele cele mai mari.</p><p>Eu Cred...<a href="#">Learn more<form role="form"><div class="form-group"><label for="comment">Comment</label><textarea id="comment" rows="5" class="form-control"></textarea></div></form></a></p></div><div id="content3" class="col-md-4"><h2>Doua raspunsuri pentru un plus de motivatie</h2><p>Cu ce chef te-ai trezit in aceasta dimineata?</p><p>Daca te-ai trezit demotivat si te-ai obisnuit cu aceasta stare in fiecare dimineata, afla ca exista doua motive esentiale pentru asta.</p><p>1. fie nu stii cine esti cu adevarat, ce iti doresti, cum iti poti exprima mai bine talentele</p><p>2. fie nu stii pe cine iti doresti sa servesti, cine este clientul tau ideal.</p><h5>Ultimele articole adaugate</h5><ol><li>Septembrie<ul><li></li><a href="#">Despre viata...</a><li></li><a href="#">Oamenii stiu de ce !</a></ul></li><li>Octombrie<ul><li></li><a href="#">Eu cred</a><li></li><a href="#">Oare!?</a></ul></li></ol><div class="row-bot"><div class="row-bot-bg"><div class="main"><h2>Mai multe imagini<div class="slider-wrapper"><div class="slider"><ul class="items"><p><a href="http://www.nastol.com.ua/large/201404/93595.jpg"><img src="http://www.nastol.com.ua/large/201404/93595.jpg" width="100" height="100"/></a><a href="http://wallpapertica.com/uploads/20141002/vesna+fotoshop+vesna+babochki+zelenij+fon+tcveti+voda+vetki+sakura+38018835096.jpg"><img src="http://wallpapertica.com/uploads/20141002/vesna+fotoshop+vesna+babochki+zelenij+fon+tcveti+voda+vetki+sakura+38018835096.jpg" width="100" height="100"/></a></p><p><a href="http://bipshop.by/wp-content/uploads/2015/01/BP-6415.jpg"><img src="http://bipshop.by/wp-content/uploads/2015/01/BP-6415.jpg" width="100" height="100"/></a><a href="http://smartblog.kz/wp-content/uploads/2015/03/apple_blossom-wallpaper-1920x1080.jpg"><img src="http://smartblog.kz/wp-content/uploads/2015/03/apple_blossom-wallpaper-1920x1080.jpg" width="100" height="100"/></a></p></ul></div></div></h2></div></div></div></div></body><div id="collection-container"></div>';

}
return __p
};

this["JST"]["#navigation-navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-inverse"><div class="container-fluid"><div><ul class="nav navbar-nav"><li class="active"><a href="#">Acasa</a></li><li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle">Categorii</a></li><li><a href="#">Despre mine</a></li><li><a href="#">Contact</a></li></ul></div></div></nav>';

}
return __p
};