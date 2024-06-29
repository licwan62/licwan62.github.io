var flag0 = 0;
var img_quent;
var img_wh;
var timer = 0
$(function() {
	timer++;
	console.info("定时器调用次数: ", timer)
	setInterval('right_click()', 5000)
	setsize()
	console.log("setsoze()over: img_quent: " + img_quent + "; img_wh: " + img_wh + "; #d2_wh: " + $('#d2').css(
		'width'))
	for (var i = 0, j = 22; i < 5, j <= 26; i++, j++) {
		myimg[i].disp(j)
	}
	$('#RightArr').click(function() {
		right_click()
	})
	$('#LeftArr').click(function() {
		left_click()
	})
})
Image.prototype.disp = function(n) {
	this.src = "images/" + n + ".jpg"
}

setsize = function() {
	$("[name = 'myimg'],#d1,#d3").each(function() {
		$(this).addClass("size")
	})
	var cells = $('[name=myimg]');
	img_wh = parseInt(cells.css("width"));
	img_quent = cells.length;
	$('#d2').css('width', img_quent * img_wh)
	console.log("img_quent: " + img_quent + "; img_quent: " + img_quent + "; #d2_wh: " + $('#d2').css('width'))
}

right_click = function() {
	if (flag0 < img_quent - 1) {
		$('#d2').animate({
			left: (-1) * (flag0 + 1) * img_wh + "px"
		}, 600);
		flag0++;
	}
	console.info("flag0: " + flag0)
}

left_click = function(w) {
	if (flag0 > 0) {
		$('#d2').animate({
			left: (-1) * (flag0 - 1) * img_wh + "px"
		}, 600);
		flag0--;
	}
	console.info("flag0: " + flag0)
}

var TheTime;
window.onload = function() {
	var s2, hour, minute, second;
	setInterval(function() {
		var d1 = new Date();
		hour = d1.getHours();
		minute = intToStr(d1.getMinutes());
		second = intToStr(d1.getSeconds());
		if (hour < 6) s2 = '凌晨';
		else if (hour < 12) s2 = '上午';
		else if (hour < 18) s2 = '下午';
		else if (hour < 24) s2 = '晚上';
		TheTime = s2 + ":" + hour + ":" + minute + ":" + second;
	}, 1000)
}
intToStr = function(n) {
	var s1;
	if (n < 10) {
		s1 = "0" + n;
		return s1
	} else return n
}
b1_click = function() {
	var txt = inp0.value;
	if (txt) {
		var url = "http://www.tuling123.com/openapi/api?key=fb8462e3feae43caa061fcd705bac1b7&info=" + txt,
			MeHtml = "";
		MeHtml += '<div class="me">';
		MeHtml += '<div class="touxiang"></div>';
		MeHtml += '<div class="time">' + TheTime + '</div>';
		MeHtml += '<div class="words">' + txt + '</div>';
		MeHtml += '</div>';
		console.info(MeHtml)
		var RobHtml = "";
		$('#d5').append(MeHtml)
		$.get(url, function(data) {
			var s1 = data.text;
			RobHtml += '<div class="rob">';
			RobHtml += '<div class="touxiang"></div>';
			RobHtml += '<div class="time">' + TheTime + '</div>';
			RobHtml += '<div class="words">' + s1 + '</div>';
			RobHtml += '</div>';
			$('#d5').append(RobHtml)
			console.info(RobHtml)
			var cells = document.getElementsByClassName('words');
			var cell = cells[cells.length - 1];
			cell.scrollIntoView({
				behavior: 'smooth'
			});
		})
	} else alert('输入为空')
}
