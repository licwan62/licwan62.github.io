var a1 = new Array;
var flag = 0;
onload = function() {

	for (var i = 0; i < 10; i++) {
		a1[i] = i + 1;
	}
	randomlize(0);
}

function randomlize(x) {
	for (var i = x; i < 10; i++) {
		var t = a1[x];
		var rand1 = Math.floor(Math.random() * (10 - x) + x);
		a1[x] = a1[rand1];
		a1[rand1] = t;
	}
	check()
}

function b1_click() { //随机添加图片
	disp(a1, flag)
	console.info("add: a1[" + flag + "]: " + a1[flag])
	console.info(a1)
	flag++;
}

function check() {
	console.info(a1)
}

function disp(x, y) {
	if (y < 10) {
		var cell = document.createElement("img");
		var div1 = document.getElementById("div1")
		cell.src = "img/" + x[y] + ".jpg";
		div1.appendChild(cell)
	} else alert("没图了")
}

function redisp(x, y) {
	div1.innerHTML = "";
	for (var i = 0; i < y; i++) {
		disp(x, i);
	}
}


function b2_click(n) {
	switch (n) {
		case 1: //删除新创建图片
			if (flag > 0) {
				console.info("remove: a1[" + flag + "]: " + a1[flag])
				flag--;
				var t = a1[flag]
				randomlize(flag)
			} else alert("还没有添加过图片")
			var cell1 = document.getElementsByTagName("img");
			var cell2 = cell1[0];
			cell2.parentNode.removeChild(cell1[flag]);
			break;

		case 2: //删除第一张图片
			if (flag > 0) {
				console.info("remove: a1[" + flag + "]: " + a1[flag])
				var t = a1[0]
				a1.shift();
				a1[9] = t;
				flag--;
				randomlize(flag)
			} else alert("还没有添加过图片")
			var cell1 = document.getElementsByTagName("img");
			var cell2 = cell1[0];
			cell2.parentNode.removeChild(cell1[0]);
			break;
	}
}

function additem(obj) {
	var cell = document.createElement("p");
	cell.innerHTML = "随机数 : " + Math.floor(Math.random() * 100 + 1);
	obj.append(cell);
}
moveitem = function(obj1, obj2) { //项从obj1>>obj2
	var cells = obj1.getElementsByTagName("p");
	if (cells.length > 0) {
		var cell = cells[cells.length - 1];
		obj2.append(cell)
	} else alert(obj1.innerText + "已经没有项了");
}

function removep(obj) {
	var cells = obj.getElementsByTagName("p");
	while (cells.length > 0) {
		var cell = cells[0];
		cell.parentNode.removeChild(cells[0]);
	}
	clear_visi(obj);
}

function clear_visi(obj) { //控制obj{listL,ListR}中的button的visibility; obj中有项(p)则visible
	console.info("hello")
	var cells = obj.getElementsByTagName("p");
	var cell2 = obj.getElementsByTagName("button");
	if (cells.length > 0) cell2[0].style.visibility = "visible";
	else cell2[0].style.visibility = "hidden";
}
