/**
 * 
 */

/*타입까지 비교방법*/

var a = 10;
var b = 20;
var c = 10;
var d = "20";
var result;  //타입을 알아보려면? type of a;

result = (a==c);
document.write("a==c의 결과 : ",a==c,"<br>"); //true
document.write("a==b의 결과 : ",a==b,"<br>"); //false
document.write("b==d의 결과 : ",b==d,"<br>"); //true 
document.write("b===d의 결과 : ",b===d,"<br>"); //타입까지도 같은지 비교방법 '===' //false
	
	
