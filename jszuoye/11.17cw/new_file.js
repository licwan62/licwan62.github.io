onload = function() {
	div1.style.height = screen.height - 140 + "px";
	div2.style.top = div1.style.height;
	add();
}
add = function() { //div3中显示一列图片;
	var pics_src = imgarrs.split(",");
	var pics = "";
	console.info(pics_src)
	for (var i = 0; i < pics_src.length; i++) {
		pics += "<img src='" + pics_src[i] + "' onclick='show(this),picclick(this)'>";
	}
	div3.innerHTML = pics;
}
show = function(obj) { //obj显示在div1中,原始大小图片,并居中;
	var cell = div1.getElementsByTagName("img")[0];
	cell.src = obj.src;
	cell.style.position = "absolute";
	var d1_height = parseInt(div1.style.height);
	var d1_width = parseInt(div1.style.width);
	var img_height = obj.naturalHeight;
	var img_width = obj.naturalWidth;
	cell.style.top = d1_height / 2 - img_height / 2 + "px";
	cell.style.left = d1_width / 2 - img_width / 2 + "px";
	console.info("cell.src: " + cell.src)
	console.info("cell.style.top: " + cell.style.top + " ; d1_height: " + d1_height + " ; img_height: " +
		img_height)
}
var oldobj = "";
picclick = function(obj) { //选中图片加边框,在盒子中间
	if (oldobj) oldobj.className = "";
	obj.className = "disp";
	oldobj = obj;
	var cells = div3.getElementsByTagName("img");
	for (var i = 0; i < cells.length; i++) {
		if (obj.src == cells[i].src) {
			var index = i;
			console.info("index: " + index)
			break;
		}
	}
	var scrWid = screen.width;
	var lef = scrWid / 2 - index * 130 - 65;
	div3.style.width = cells.length * 130 + "px";
	console.info("lef: " + lef + "; screen.width: " + screen.width)
	div3.style.left = lef + "px";
}
