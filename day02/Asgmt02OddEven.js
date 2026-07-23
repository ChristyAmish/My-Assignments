//odd or Even : first approach

function isOddOrEven(number){
    if(number%2===0){
        return "Even";
    }
    else{
    return "Odd"
    }
}
let number=846;
let output = isOddOrEven(number);
console.log(number +" is a " +output+ " Number");
number=99;
output = isOddOrEven(number);
console.log(number +" is a " +output+ " Number");


//odd or Even : second approach
function isOddOrEven2(num1){
    if(num1%2===0){
        console.log(+num1 +" is a even number");
    }
    else
    {console.log(+num1 +" is a odd number")}
}
isOddOrEven2(3);


//odd or Even : third approach
function isOddOrEven1(){
    let num=8
    if(num%2===0){
        console.log(num +" is a even number");
    }
    else
    {console.log(num +" is a odd number")}
}
isOddOrEven1()
