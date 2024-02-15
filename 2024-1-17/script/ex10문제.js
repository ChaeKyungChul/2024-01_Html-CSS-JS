function stringAddPy(str){
    if(str === null || str === undefined || str.substring(0,2) =="Py" ){
        return str;
    }
    return "Py" + str;
}
console.log(stringAddPy("Python"));
console.log(stringAddPy("javascript"));
