//Arrays

function listArray(myArray = [], elementId = '') {
    let text = '<ul>';

    for (let i = 0; i < myArray.length; i++) {
        text += '<li>' + myArray[i] + '</li>';
    }

    text += '</ul>';

    document.getElementById(elementId).innerHTML = text;
}



function multiplyArrays(array1 = [], array2 = []) {
    let resultArray = [];
    if (array1.length == array2.length) {
        for (let i = 0;
            (i < array1.length); i++) {
            resultArray[i] = array1[i] * array2[i];
        }
    }else{
        throw 'no no no no';
    }
    return resultArray;
}

//test multiply array function

let answerArray = multiplyArrays([1, 2, 3, 4], [5, 6, 7, 8]);
//answerArray == [5, 12, 21, 32];
console.log(answerArray);

listArray(answerArray, 'array');