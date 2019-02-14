// function concat(word = new String,...yourWords= new String){
    // let addWord = word;
    // return yourWords;
// }

// function getRandomNum(){
//     return Math.random() + Math.random();
// }
// console.log(getRandomNum())
// document.getElementById("stuff").innerHTML=getRandomNum();

function findLongestWord(...words){
    theWord = '';
    for(i=0; i < words.length; i++){
        if(theWord.length < words[i].length){
            theWord = words[i];
        }
    }
    return theWord;
}

// let result = findLongestWord('dream','big,', 'dreams', 'dreams');
// console.log(result);

function addNums(nums){
    endNum = 0;
    for(i=0; i < nums[i]; i++){
        endNum += nums[i];
    }
    return endNum;
}

// let myNumber = addNums(1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9);
// console.log(myNumber);

//funkyFunc takes one function and a buncha other stuff
function funkyFunc(func, ...a){
    let result = func(a);
    //  result += a;
    return result;
} 
let newResult = funkyFunc(addNums, 10, 10, 10);

console.log('THIS IS THE RESULT: ' + newResult);
