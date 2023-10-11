/**
 * 
 */

/* 두수를 입력해서 첫번째 숫자부터 두번째 숫자까지의 합을 구하여라.*/
var num1 = Number(prompt("첫번째 숫자를 입력하세요.","숫자입력"));
var num2 = Number(prompt("두번째 숫자를 입력하세요.","숫자입력"));
	
var sum = 0;

for(var i=num1; i<=num2; i++){
	sum += i;
}

document.write(num1+"부터"+num2+"까지의 합은 :"+sum,"<br>");


	
	
