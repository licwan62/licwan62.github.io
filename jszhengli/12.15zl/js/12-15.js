b1_click=function(){
	out1.innerHTML="(王力成,202010701560075)"
}
b2_click=function(){
	var a1=new Array();
	var s1=out2.value;
	var s2="";
	for(var i=0; i<s1.length; i++){
		a1.push(s1.charAt(i))
	}
	a1.reverse();
	for(var i=0; i<s1.length; i++){
		s2+=a1[i];
	}
	out2.value=s2;
	console.info("a1: "+a1+"; s2: "+s2)
}
b3_click=function(){
	var ss;
	var a1=new Array();
	var flag;
	for(ss=10; ss<=50; ss++){
		flag=0;
		for(var i=2; i<=ss/2; i++){
			if(ss%i == 0){
				flag=1;//not sushu
			}
		}
		if(flag==0)a1.push(ss);
	}
	out3.innerHTML=a1.join("-").toString();
}
$(function(){
	setInterval("gettime()",1000);
})

gettime=function(){
	var s1;
	var hh,mm,ss;
	var d1=new Date();
	var PMorAM;
	hh=inToStr(d1.getHours());
	mm=inToStr(d1.getMinutes());
	ss=inToStr(d1.getSeconds());
	if(d1.getHours()<12)PMorAM="AM";
	else PMorAM="PM";
	s1=hh+":"+mm+":"+ss+" "+PMorAM;
	out4.innerHTML=s1;
}
inToStr=function(n){
	var s1=n;
	if(n<10){
		s1="0"+n;
	}
	return s1;
}