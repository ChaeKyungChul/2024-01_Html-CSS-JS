let a = 10, b=20, m=30, n=40;
let result;

result = a>b ||b>m ||m>n;  //f    
console.log(result)

result = a > b || b >= m || m <= n; //t
console.log(result)

result = a <= b && b > m && m <= n; //f
console.log(result);
    
result = a <= b && b <= m && m <= n; //t
console.log(result);

result = !(a > b);  //t
console.log(result);

result = a < b ? "noscript" : "javascript"
console.log(result)

