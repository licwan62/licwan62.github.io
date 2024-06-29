var o = document.body;
//创建DIV
window.onload = function() {
	createDIV();
}

function createDIV() {
	var cell = document.createElement('div')
	cell.innerHTML = "<div><a href="+"../../index.html"+">回到主页</a></div>"
	document.body.append(cell)
}
