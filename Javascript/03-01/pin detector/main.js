//pin must be 4 or 6 digits and must contain only digits
// function checkPin(pin){
//     let myreg = /^([0-9]{4,6})$/;
//     if(myreg.test(pin)){
//         //returns true if a match
//         console.log(true + '' + pin);
//     }else{
//         console.log(false + '' + pin);
//     }
// }
function checkPin(pin) {
    console.log(/^(?=[0-9]*$)(?:.{4}|.{6})$/.test(pin) + pin);
}

checkPin('1234');
checkPin('1234');
checkPin('1234');
checkPin('12345');
checkPin('a123');
checkPin('-123');
checkPin('123412323');
checkPin('123456');