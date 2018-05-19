/*
			设置屏幕和输入框的宽度
		 */
function initScreen() {
    $('.screen').css({
        height: height,
        width: width
    });
    $('.a1').css({
        height: height - 100,
        width: width
    });
    $('.inputArea').css({
        width: width
    });
}

//获得随机位置
function getRandomTop() {
    return Math.random() * (height - 150);
}

//获得随机颜色
function getRandomColor() {
    var color = '#';
    for (var i = 0; i < 3; i++) {
        color += Math.ceil(Math.random() * 255).toString(16);
    }
    return color;
}

//把弹幕文字发射到屏幕中
function addTxt2Screen(txt) {
    var name = "txt" + i;
    i++;
    $('.screen').prepend('<font class=' + name + '>' + txt + '</font>');
    name = ".screen ." + name;
    var x = $(name).width();
    $(name).css({left: width - x, top: getRandomTop(), color: getRandomColor()});

    $(name).animate({
        left: -width + x
    }, 10000, function () {
        //移除该文字
        $(this).remove();
    });
}


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
