window.onload = function() {
	setInterval("time()", 1000)
}
time = function() {
	var d1 = new Date();
	console.info("hello")
	$('#main span').each(function(index, elem) {
		switch (index) {
			case 0:
				elem.innerHTML = d1.getFullYear();
				break;
			case 1:
				elem.innerHTML = d1.getMonth() + 1;
				break;
			case 2:
				elem.innerHTML = d1.getDate();
				break;
			case 3:
				elem.innerHTML = intToHanzi(d1.getDay());
				break;
			case 4:
				elem.innerHTML = intToStr(d1.getHours());
				if(d1.getHours()>21||d1.getHours()<5)changeBg('night');
				else changeBg('day');
				break;
			case 5:
				elem.innerHTML = intToStr(d1.getMinutes());
				break;
			case 6:
				elem.innerHTML = intToStr(d1.getSeconds());
				break;
		}
	})
}
intToStr = function(obj) {
	if (obj < 10) return "0" + obj;
	else return obj;
}
intToHanzi = function(int) {
	var hanzis = "一,二,三,四,五".split(",");
	var ints = "1,2,3,4,5".split(",");
	for (var i = 0; i < 5; i++) {
		if (int == ints[i]) {
			return hanzis[i];
		}
	}
}
changeBg=function(obj){
	switch(obj){
		case 'night':
		$('#timeDIV').addClass('bg_night');
		break;
		case 'day':
		$('#timeDIV').addClass('bg_day');
		break;
	}
}