

function launchBrowser(browserName){

    if (browserName==="Chrome"){
        console.log ("Chrome is the browser ")
    }
    else{
        console.log("Otherwise - Chrome is N0T the browser")
    }
}

let browserName = "Chrome";
launchBrowser(browserName);

function runTests(testType){
    switch (testType){
        case "smoke":
        console.log("Type of test is Smoke");
        break;
        case "sanity":
        console.log("Type of test is Sanity");
        break;
        case "regression":
        console.log("Type of test is regression");
        break;
        default:
        console.log("Default test type is Smoke");
        break;
    }

}
let testType ="dfdsf"
runTests(testType);