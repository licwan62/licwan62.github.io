var flag0, flag1, flag2, flag3, flag4;
b1_click = function() {
	if (flag0) {
		$('#p1').show();
		$('button:eq(1)').text('隐藏p1');
		flag0 = false;
	} else {
		$('#p1').hide();
		$('button:eq(1)').text('显示p1');
		flag0 = true;
	}
}
$(document).ready(function() {
	$('#b2').click(function() {
		if (flag1) {
			$('p.p2').show();
			$(this).text('隐藏p2');
			$(this).css('border-color', '')
			flag1 = false;
		} else {
			$('p.p2').hide();
			$(this).text('显示p2');
			$(this).css('border-color', '#e63946')
			flag1 = true;
		}
	})
	$('#b3').click(function() {
		if (flag3) {
			$('dd span').remove();
			$(this).text("加序号");
			flag3 = false;
		} else {
			$('dd').each(function(index, element) {
				element.innerHTML = "<span>" + (index + 1) + "." + "</span>" + element
				.innerHTML;
			})
			$(this).text("删序号");
			flag3 = true;
		}
	})
	$('p').dblclick(function() {
		$(this).css('color', 'black')
		console.info("dblclicked", $(this).text())
	})
	$('p:first').click(function() {
		$(this).css('color', '#f72585')
	})
	$('p:eq(1)').click(function() {
		$(this).css('color', '#7209b7')
	})
	$('p:eq(2)').click(function() {
		$(this).css('color', '#ef233c')
	})
	$('p:last').click(function() {
		$(this).css('color', '#fb8500')
	})


})
