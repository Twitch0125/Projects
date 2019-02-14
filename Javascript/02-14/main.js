// (function () {
//   collectNums();
// })();


// function collectNums() {
//     let numOne = findNumber(4, 'ka');
//     let numTwo = findNumber(9, 'leb');
//     document.getElementById('stuff').innerHTML = numTwo;
// }

// function findNumber(myNum, myName) {
//     return myNum + 3;
// }

// var firstname = "Joel";
// var lastname = "Frasier";

// function combinename(fname, lname){

// 	fname += " John";
// 	return fname + " " + lname;
// }

// alert(combinename(firstname, lastname));

// var firstname = "Joel";
// var lastname = "Frasier";
// var middlename = "Darryl";
// var nametitle = 'Sir';

// function combinename(fname, lname) {

//     fname += " John";
//     return nametitle + fname + " " + middlename + lname;
// }


// alert(combinename(firstname, lastname));


function calculator() {
    let numOne = Number(document.getElementById("numOne").value);
    let operator = document.getElementById("operator").value;
    let numTwo = Number(document.getElementById("numTwo").value);
    let result;
    let expression = `${numOne} ${operator} ${numTwo}`;

    if( numOne, numTwo == NaN){
        result = "Please use numbers...";
    }

    switch (operator) {
        case '*':
            result = numOne * numTwo;
            break;

        case '/':
            result = numOne / numTwo;
            break;

        case '+':
            result = numOne + numTwo;
            break;

        case '-':
            result = numOne - numTwo;
            break;

        default:
            result = "please use a real operator";
    }
    document.getElementById('expression').innerHTML = expression;

    document.getElementById('result').innerHTML = result;

    //clear fields
    document.getElementById('numOne').value = '';
    document.getElementById('numTwo').value = '';
}