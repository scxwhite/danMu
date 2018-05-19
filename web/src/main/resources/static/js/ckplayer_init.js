var height = $(window).height();
var width =$(window).width()
console.log(height + " " +width);
var danmuList = new Array();
var danmuLen;
var index = 0;
var videoAddress = true;
var i = 0;
var allDanmu;
var time = 0;
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
var support = ['iPad+false', 'iPhone+false', 'ios+false', 'android+false', 'msie10+false'];
CKobject.embedHTML5('a1', 'ckplayer_a1', width, height * 0.8, video, flashvars, support);


function endedHandler() {
    if (videoAddress) {
        CKobject.getObjectById('ckplayer_a1').newAddress('{p->1}{f->http://127.0.0.1:8080/video/dusk.mp4}{html5->http://127.0.0.1:8080/video/dusk.mp4->video/mp4}')
    }
    else {
        CKobject.getObjectById('ckplayer_a1').newAddress('{p->1}{f->http://127.0.0.1:8080/video/jannina weigel.mp4}{html5->http://127.0.0.1:8080/ckplayer/jannina weigel.mp4->video/mp4}')
    }
    videoAddress = !videoAddress;
}


/*
 * video播放事件
 * 第一次向数据库发送AJAX请求来获取所有弹幕
 * */
function timeHandler(t) {
    time = t;
    if (isFirst) {
        isFirst = false;
        //ajax请求获取数据库中所有弹幕
        $.ajax({
            url: "DanMu/findAll",
            type: "get",
            success: function (data) {
                danmuLen = data.length;
                danmuList = data;
            }
        });
    }
    while (index < danmuLen) {
        if (Math.abs(danmuList[index].createTime - t) < 2 || danmuList[index].createTime < t) {
            addTxt2Screen(danmuList[index].msg);
            index++;
            continue;
        }
        break;
    }
}

//视频加载事件
function loadedHandler() {


    if (CKobject.getObjectById('ckplayer_a1').getType()) {
        CKobject.getObjectById('ckplayer_a1').addListener('ended', endedHandler);
        CKobject.getObjectById('ckplayer_a1').addListener('time', timeHandler);
    }
    else {
        CKobject.getObjectById('ckplayer_a1').addListener('ended', 'endedHandler');
        CKobject.getObjectById('ckplayer_a1').addListener('time', 'timeHandler');
    }
}