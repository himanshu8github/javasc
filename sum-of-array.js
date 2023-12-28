function addNumbers(){
    let result = 0;
        for(let i = 0; i<arguments.length; i++){
            //i denotes index of array 0-based
            result += arguments[i];
        }
        return result;
}

console.log(addNumbers(1,4,7));
console.log(addNumbers(4,44,17));
console.log(addNumbers(0,11,7));