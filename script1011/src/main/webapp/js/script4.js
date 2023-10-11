/**
 * 
 */

/* 1부터 입력한 값까지의 합*/
var num = Number(prompt("숫자를 입력하세요.","숫자입력"));
	
var sum = 0;

for(var i=0; i<=num; i++){
	sum += i;
}

document.write("1부터"+num+"까지의 합은 :"+sum,"<br>");


	
	
