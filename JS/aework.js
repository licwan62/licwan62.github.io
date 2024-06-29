$(function() {
	givetag();
	resizing();
})
var client_W = document.documentElement.clientWidth;
var client_H = document.documentElement.clientHeight;
window.onresize = resize = function resize() {
	resizing();
}
resizing=function(){
	client_W = document.documentElement.clientWidth;
	client_H = document.documentElement.clientHeight;
	var iframe = document.getElementsByTagName("iframe")[0];
	var iframe_W = iframe.offsetWidth;
	var iframe_H = iframe_W / 16 * 11;
	$('#videofather').find('iframe').attr('height', iframe_H)
	console.info("iframe-size: "+iframe_H+"*"+iframe_W)
}
givetag = function() {
	$('#videofather').find('iframe:even').attr('class', 'left_iframe')
	$('#videofather').find('iframe:odd').attr('class', 'right_iframe')
}
