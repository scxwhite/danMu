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


var screen = $('.screen');
//文本的编号
$(document).ready(function () {
    initScreen();
    $('.back').css("display", "block");
    $('.start_screen').click(function () {
        $('.screen').toggle(1000);
        $(this).toggle(1000);
        $('.end_screen').toggle(1000);
        $('.back').toggle(1000);
    });
    $('.end_screen').click(function () {
        $('.screen').toggle(1000);
        $(this).toggle(1000);
        $('.start_screen').toggle(1000);
        $('.back').toggle(1000);
        istrue = false;
        index = 0;
    });
    //发送弹幕事件
    $('.textSubmit').click(function () {
        var txt = $('.inputText').val();

        $('.inputText').val("");
        /*
         * ajax异步将数据写入数据库
         * 在DanMu_add.action动作类中将弹幕广播发送给其它用户
         * */
        $.ajax({
            url: "DanMu/add",
            type: "post",
            data: {
                "msg": txt,
                "time": time
            },
            success: function (data) {
            }
        });
    });
    //返回导航按钮
    $('.back').click(function () {
        location.href = "temp.jsp";
    });
});
var goeasy = new GoEasy({
    appkey: 'BS-0402936ecd8b42ab97189d5598ed2c79'
});
goeasy.subscribe({
    channel: 'DanMu',
    onMessage: function (result) {
        //将其它客户端发送的消息显示到屏幕
        addTxt2Screen(result.content);
    }
});