// (function () {
//     console.log('sleep')
// })();

// function myFunc(varOne, varTwo) {
//     console.log('hello, my name is Kaleb. I am ' + varOne + ' tall and i have ' + varTwo + ' hair');
// }

// let y = iWantToSleep('kaleb', 'bed');

// function iWantToSleep(human, object) {
//     return human + ' wants to sleep in his ' + object;
// };

// console.log(y);


// function makeIterator(myarray = []) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < myarray.length ? 
//             {value: myarray[nextIndex++], done: false}:
//             { done:true};
//         }
//     }
// }

// let it = makeIterator(['kaleb' , 'devin', 'david']);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().done);

// let addItem = (function(itemtype){
//     let cartItems = 0;
//     let mytype = itemtype;
//     return function(){
//         return cartItems += 1;
//     };
// })();

// console.log(addItem('dog'));
// console.log(addItem('dog'));
// console.log(addItem('dog'));

function addSeven(num = new Number()){
    const SEVEN = 7;
    num += SEVEN;
    return num;
}

console.log(addSeven());