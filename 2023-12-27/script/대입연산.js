/*
A = B; //B를 A에 대입한다. 대입연산
A += B; ==> A = A + B;
A -= B; ==> A = A - B;
A *= B; ==> A = A * B;
A /= B; ==> A = A / B;
A %= B; ==> A = A % B;
*/
 
let num1 = 50;
let num2 = 30;

let result1 = num1 += num2;
let result2 = num1 -= num2;
let result3 = num1 *= num2;
let result4 = num1 /= num2;
let result5 = num1 %= num2;



console.log(result1, result2, result3, result4, result5)
