//

function numberType(num) {
    if (isNaN(num)){
        return "The Given input is not a number"
    }
    else if (num === 0) {
        return "Given number is neutral";
    } else if (num > 0) {
        return "number is positive";
    } else {
        return "number is negative";
    }
}
let num = "ffsd";
console.log(numberType(num));

num=345;
console.log(numberType(num));

num=-55;
console.log(numberType(num));

num=0;
console.log(numberType(num));


