/**
 * 
 */

/*입력 2개 : 신장(height), 몸무게(weight)*/
var input =0;
var weight =0;

input=Number(prompt("키를 cm로 입력하세요.","숫자입력"));
weight=Number(prompt("몸무게를 kg으로 입력하세요.","숫자입력"));

var height = input/100
var result = weight/(height*height);

document.write("내 BMI 는 :"+result+"입니다.","<br>");

if(result<=18.5){
	document.write("저체중입니다.","<br>")
}else if(result<23){
	document.write("정상입니다.","<br>")
}else if(result<25){
	document.write("과체중입니다.","<br>")
}else 
	document.write("비만입니다.","<br>")



	
	
