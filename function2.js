

//this way also we can store the value
function addNumbers(a,b,c){
    const sumValues = a + b + c;
    return sumValues;
}

console.log(addNumbers(10,25,15));





//this way also we cannot store the value
function addNumbers(a,b,c){
    return a + b + c;
}

console.log(addNumbers(10,25,15));