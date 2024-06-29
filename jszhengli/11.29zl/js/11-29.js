var flag = 1,
	flag1 = 1;
f1 = function(n) {
	var NewWindow = null;
	console.info(n)
	if (n == 1) {
		NewWindow = window.open("")
		document.getElementById('b1').innerHTML = "关闭";
		flag = 0;
	} else if (n == 0) {
		if (NewWindow) {
			NewWindow.close()
			document.getElementById('b1').innerHTML = "GO";
			flag = 1;
		}
	}
}
f2 = function() {
	var s1 = "left=50px,top=50px,width=" + inp01.value + ",height=" + inp02.value;
	var addr = "https://www.w3school.com.cn/index.html"
	window.open(addr, "_blank", s1);
	window.open(addr, "_blank", s1);
	window.open(addr, "_blank", s1);
}
var urls = new Array();
var NewWindow = new Array();
var ss = new Array();
f3 = function(n) {

	switch (n) {
		case 1:
			document.getElementById('b3').innerHTML = "关闭所有";
			openlotsofweb(urls, NewWindow, ss)
			flag1 = 0;
			break;
		case 0:
			document.getElementById('b3').innerHTML = "GO";
			closeall(NewWindow)
			flag1 = 1;
			break;
	}
	console.info("flag1 has changed to " + flag1 + "length " + NewWindow.length)
}
f4 = function() {
	var o = window.open();
	o.document.write("<h1>惧人</h1>" +
		"<h2>抖音</h2>" +
		"<h3>我害怕鬼<br />" +
		"但鬼未伤我分毫<br />" +
		"我不害怕人<br />" +
		"但人把我伤的遍体鳞伤</h3>")


}
openlotsofweb = function(urls, NewWindow, ss) {
	urls =
		'https://www.baidu.com,https://cn.bing.com,http://www.people.com.cn,https://www.w3school.com.cn/h.asp,https://www.w3school.com.cn/b.asp,https://www.w3school.com.cn/r.asp,https://www.w3school.com.cn/w.asp,https://www.w3school.com.cn/x.asp,https://www.w3school.com.cn/p.asp'
		.split(",");
	for (i in urls) {
		ss[i] = "left=" + (150 + i * 50) + "px,top=50px,width=500px,height=300px"
		console.info(i + " : " + ss[i]);
		NewWindow.push(open(urls[i], "", ss[i]));
	}
}
closeall = function(NewWindow) {
	console.info("hello")
	while (NewWindow.length > 0) {
		NewWindow.pop().close();
		console.info('closed')
	}
	console.info('closeall succeed')
}
