
	var screen = $('.screen');
		//文本的编号
		$(document).ready(function() {
			initScreen();
			$('.back').css("display", "block");
			$('.start_screen').click(function() {
				$('.screen').toggle(1000);
				$(this).toggle(1000);
				$('.end_screen').toggle(1000);
				$('.back').toggle(1000);
			});
			$('.end_screen').click(function() {
				$('.screen').toggle(1000);
				$(this).toggle(1000);
				$('.start_screen').toggle(1000);
				$('.back').toggle(1000);
				istrue=false;
				index=0;
			});
			//发送弹幕事件
			$('.textSubmit').click(function() {		
				var txt = $('.inputText').val();
				
				$('.inputText').val("");
				/*
				 * ajax异步将数据写入数据库
				 * 在DanMu_add.action动作类中将弹幕广播发送给其它用户
				 * */ 
				$.ajax({
					url:"DanMu/add",
					type:"post",
					data:{
						"msg":txt,
						"time":time
					},
					success:function(data){
					}
				});
			});
			//返回导航按钮
			$('.back').click(function() {
				location.href = "temp.jsp";
			});
		});
		