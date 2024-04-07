var flag = 1;
var opData1 = "",
	opData2 = "",
	op = "",
	opResult = "";

function ss(x) {
	if (flag == 1) input1(x);
	else if (flag == 2) input2(x);
	else input3(x);
	disp(x);
}

function input1(x) {
	switch (x) {
		case '+':
		case '-':
		case '*':
		case '/':
			op = x;
			flag = 2;
			opData2 = "";
			break;
		case '=':
			break;
		default:
			opData1 += x;
			break;
	}
}


function input2(x) {
	switch (x) {
		case '+':
		case '-':
		case '*':
		case '/':
			opData1 = eval(opData1 + op + opData2);
			op=x; opData2="";
			break;
		case '=':
			opResult = eval(opData1 + op + opData2);
			flag = 3;
			break;
		default:
			opData2 += x;
			break;
	}
}

function input3(x) {
	switch (x) {
		case '+':
		case '-':
		case '*':
		case '/':
			flag = 2;
			opData1 = opResult;
			op = x;
			opData2 = "";
			break;
		case '=':
			break;
		default:
			opData1 = x;
			flag = 1;
			break;
	}
}


function disp(x) {
	if (flag == 1) t1.innerHTML = opData1;
	else if (flag == 2) t1.innerHTML = opData2;
	else t1.innerHTML = opResult;
	console.info("x:" + x + ",flag:" + flag + ",opData1:" + opData1 + ",opData2:" + opData2 + ",op:" + op + ",opResult:" +
		opResult)
}
