/** 날짜 객채 
 * 참조 변수 = new date();
 * 
*/

//오늘은 0000년 00 월 00일 (00요일) 입니다. 라고 출력
//`오늘은 ${t. getfull}


/*
 참조변수 = new Date();
*/

//`오늘은 ${t.getFullYear()}년 ${t.getMonth()+1}월 ${t.getDate()}일 (${week}요일) 입니다.  라고 출력해 보세요.

const t = new Date();
const weeks = t.getDay();
let week;
switch(weeks){
    case 0:
       week = "일요일";
    break;
    case 1:
       week = "월요일";
    break;
    case 2:
        week = "화요일";
    break;  
    case 3:
        week = "수요일";
     break;
     case 4:
        week = "목요일";
     break;
     case 5:
        week = "금요일";
     break;
     case 6:
        week = "토요일";
     break;    
}
const nowdate = `오늘은 ${t.getFullYear()}년 ${t.getMonth()+1}월 ${t.getDate()}일 (${week}요일) 입니다. `;
console.log(nowdate);
