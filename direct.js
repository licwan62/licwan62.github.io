var o = document.body;
window.onload = function() {
	createDIV();
}

function createDIV() {
	var cell = document.createElement('div')
	cell.innerHTML = "<div><a href="+"../../index.html"+">回到主页</a></div>"
	o.append(cell)
}
