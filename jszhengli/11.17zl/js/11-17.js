var flag = 0,
	flag2 = 0,
	flag3 = 0;

function s_change(x) {
	flag++;
	console.info("s_change()运行次数:" + flag);
	var my_select = document.getElementsByTagName("select")[x];
	var my_a = document.getElementsByTagName("a")[x]; //getElementsByTagName("a")[x]
	var my_div = document.getElementsByTagName("div")[x + 1]
	if (my_select.selectedIndex != 0) {
		my_a.innerHTML = my_select.options[my_select.selectedIndex].text;
		my_a.href = my_select.options[my_select.selectedIndex].value;
	} else {
		my_a.innerHTML = "空网站"
		my_a.href = "about:blank"
	}
	bgChange(my_div, my_select.selectedIndex)
}

function bgChange(obj, x) {
	switch (x) {
		case 1:
			obj.className = "bg_bili";
			break;
		case 2:
			obj.className = "bg_jd";
			break;
		case 3:
			obj.className = "bg_myweb";
			break;
		default:
			obj.className = "bg_blank";
			break;
	}
}

function b1_click() { //网站空链接
	if (flag3 == 0) {
		save()
		var cells = document.getElementsByClassName("link");
		for (var i = 0; i < cells.length; i++) {
			var cell = cells[i];
			cell.innerText = "空网站";
			cell.href = "about:blank";
		}
		console.info("save()运行次数:" + flag2)
		console.info("a1:" + a1)
		console.info("a2:" + a2)
		flag3++;
	} else alert("已经设为空网站")
}

function b2_click() { //重置
	if (flag3 > 0) {
		var cells = document.getElementsByClassName("link");
		for (var i = 0; i < cells.length; i++) {
			var cell = cells[i];
			cell.href = a1[i];
			cell.innerText = a2[i];
		}
		flag3 = 0;
	}
}
var a1, a2;

function save() {
	a1 = new Array();
	a2 = new Array();
	var cells = document.getElementsByClassName("link");
	flag2++;
	a1.length = 0;
	for (var i = 0; i < cells.length; i++) {
		var cell = cells[i];
		a1.push(cell.href);
		a2.push(cell.innerText)
	}
}
