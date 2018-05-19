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