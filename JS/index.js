$(document).ready(function() {
	$('#nav_ul').each(function() {
		$(this).find('li').addClass("nav_li");
		$(this).find('a').addClass("nav_a");
	})
	$('.aside_dl').each(function() {
		$(this).find('dd').addClass("aside_dd");
		$(this).find('a').addClass("aside_a");
	})
	$('.aside_a').each(function(index, elem) {
		var aside_dl_id = $(this).parent().parent().attr('id');
		switch (aside_dl_id) {
			case 'aside_dl_1':
				var address = "jszuoye/" + $(this).children().text() + "cw/zuoye.html";
				$(this).attr('href', address);
				break;
			case 'aside_dl_2':
				var address = "jszhengli/" + $(this).children().text() + "zl/zhengli.html";
				$(this).attr('href', address);
				break;
		}
	})
})
