function addn(x, y) {
    if( x == y ) {
        return (x+y)*3;
    }else{
        return x + y;
    }
}

function diff_num(n) {
    if(n <= 19){
        return 19 - n;
    }else{
        return (n - 19) * 3;
    }
}


function test50(x, y) {
    return ((x==50 || y==50) || (x + y == 50));
     
}


function po(x, y) {
    if((x < 0 && y > 0) || (x > 0 && y < 0)){
        return true;
    }else{
        return false;
    }
    
}


console.log(addn(10, 20));
console.log(addn(10, 10));

console.log(diff_num(20));
console.log(diff_num(10));

console.log(test50(10, 20));
console.log(test50(10, 40));
console.log(test50(50, 30));

console.log(po(1, -1));
