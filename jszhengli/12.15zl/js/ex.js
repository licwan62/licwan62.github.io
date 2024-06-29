b1_click=function(){
	document.getElementById('out1').innerText="(王力成,202010701560075)";
}
b2_click=function(){
	var s1=document.getElementById('out2').value;
	var a1=new Array();
	for(var i=0; i<s1.length; i++){
		a1.push(s1.charAt(i));
	}
	a1.reverse();
	document.getElementById('out2').value=a1.join("");
}
b3_click=function(){
	var sushu=new Array();
	for(var i=10; i<=50; i++){
		if(isSs(i)){
			sushu.push(i)
		}
	}
	disp(sushu);
}
isSs=function(x){
	for(var i=2; i<x/2; i++){
		if(x%i==0){
			return 0;
		}
	}
	return 1;
}
disp=function(obj){
	var s1 = obj.join("-");
	document.getElementById('out3').innerText=s1;
}
window.onload=function(){
	setInterval("showTime()",1000);
}
showTime=function(){
	var d1=new Date();
	var h=intToStr(d1.getHours());
	var m=intToStr(d1.getMinutes());
	var s=intToStr(d1.getSeconds());
	var s1=h+":"+m+":"+s+" "+amOrpm(d1.getHours());
	document.getElementById('out4').innerText=s1;
	console.info("a")
}
intToStr=function(x){
	var s1;
	if(x<10)s1="0"+x;
	else s1=x;
	return s1;
}
amOrpm=function(x){
	if(x>=12 && x<=24)return "PM";
	else if(x<12 && x>=0)return "AM"
	else return "What the Fuck"
}