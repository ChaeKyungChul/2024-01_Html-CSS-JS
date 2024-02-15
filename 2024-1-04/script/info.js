let tv = new Object();
tv.color = "노랑색";
tv.price = "2천만원";
tv.info = function(){
    console.log("tv 색상 : "+ this.color );
    console.log("tv 가격 : " + this.price);
}
tv.info();

/** 
 * 자동차 객체를 만들고 
 * 검정색, 1억짜리 자동차 객체 info를 이용해서 출력하라.
 */

let car = new Object();
car.color = "검정색";
car.price = "1억";
car.info = function(){
    console.log("car 색상 : " + car.color);
    console.log("car 가격: " + car.price);
}
car.info();

const cars = {
    color:"검정",
    price:"1억",
    info: function(){
        console.log(`자동차 색상 : $(this.color)`);
        console.log(`자동차 가격 : $(this.price)`);
    }
}
cars.info();