

let tb = "table" ;

for (let n = 1; n <= 3; n++){
    tb += n + "행";

    for (let m = 1; m <= 3; m++){
        tb += m + "열";
    }
}


tb += "/table";
console.log(tb);//행열