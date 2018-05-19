var height = $(window).height();
var width =$(window).width()
console.log(height + " " +width);
var danmuList = new Array();
var danmuLen;
var index = 0;
var videoAddress = true;
var i = 0;
var allDanmu;
var time;
var isFirst = true;
var flashvars = {
    f: 'http://127.0.0.1:8080/video/away.mp4',
    c: 0,
    p: 1,
    loaded: 'loadedHandler'
};
var video = ['http://127.0.0.1:8080/video/away.mp4->video/mp4', 'http://www.ckplayer.com/webm/0.webm->video/webm', 'http://www.ckplayer.com/webm/0.ogv->video/ogg'];
CKobject.embed('ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', width, height * 0.8, false, flashvars, video);
//HTML5用到
/*var support = ['iPad', 'iPhone', 'ios', 'android+false', 'msie10+false'];
CKobject.embedHTML5('a1', 'ckplayer_a1', width, height * 0.8, video, flashvars, support);*/
	
	