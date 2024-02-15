/*자바스크립트
for 문  1부터 100까지중에
5의 배수이면서 7의배수가 아니면 발강
7배수 이면서 5배수가 아니면 파랑
5배수 이면서 7배수이면  검정 */



for(let i = 1; i <= 100; i++) {
    if(i % 5 == 0 && i % 7 != 0) {
        document.write("<p class='red'>" + i + "</p>");
    }else if(i % 5 != 0 && i % 7 == 0) {
        document.write("<p class='blue'>" + i + "</p>");
    }else if(i % 5 == 0 && i % 7 == 0){
    }   document.write("<p>" + i + "</p>");
}

