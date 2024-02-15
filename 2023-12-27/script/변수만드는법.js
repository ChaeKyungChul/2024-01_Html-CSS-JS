// 변수 를 만드는법
/**
 * 1. 첫 글자로 문자, $, _만 사용가능
 * 2. 중간 또는 끝의 글자는 문자, $, _, 숫자 사용가능
 * 3. 변수명은 대소문자를 구분한다.
 * 4. 변수명을 지울때는 가능하면 변수의 의미를 생각해서 짓는다.
 * 5. 변수를 복합 단어로 지울땐 두가지 방법
 *  -스네이크 표기법 : i am tom ==> i_am_tom
 *  -낙타 표기법 : I am tom ==> iAmTom 
 */

 // 변수를 선언할 때는 var 을 앞에 쓴다.  es6 == 
 // var let const 
 var num = 18;
 var num = 38;

 let num2 = 10;
 num  = 20;

 const pie = 3.14;
 

 console.log(pie);

 var num;
 num = 10;

 let str;
 str = "철수";

var box = 100;
box = 30;
console.log(box);

var nums = "1000";
console.log(typeof nums);

var num = Number(nums);
console.log(typeof num);

var s ="홍길동"; //0; "", null, undefined ==> false
console.log(Boolean(s));



var num1 = 15;
var num3 = 20;
var result;
 result = num1 + num2;
 console.log(result);

result = num1 - num2;
console.log (result);

result = num1 * num2;
console.log(result);

result = num1 / num2;
console.log(result);

result = num1 % num2;
console.log(result)
