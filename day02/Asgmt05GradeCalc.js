//student score- grade

function gradeCalculation(score){
    switch(true){
        case score>100:
        return "Score should be less than or equal to 100";
        case score>=90:
        return "Grade A";
        case score>=75:
        return "Grade B";
        case score>=50:
        return "Grade C";
        default:
        return "Grade F - Fail";
     
    }
}
let score = 75;
console.log(gradeCalculation(score));