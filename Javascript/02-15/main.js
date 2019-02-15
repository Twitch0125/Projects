// function countSelectedElements(array) {
//     let numberSelected = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].selected) {
//             numberSelected++;
//         }
//     }
//     return numberSelected;
// }

// let todos = [{
//     text: 'do something already',
//     selected: false
// }, {
//     text: 'take out garbage',
//     selected: true
// }];

// console.log(countSelectedElements(todos));

/*
create an array w/ the alhabet letters as items in the array
then create a for loop that will print those letters in reverse order.
Cannot use Array.prototype.reverse();
input: ['a','b','c']
output: 'c','b','a'
*/

// function reverseAlphabet(array) {
//     let letters;
//     for (i = array.length - 1; i >= 0; i--  ) {
//         letters += ` ${array[i]}, `;
//     }
//     return letters;
// }

// let alphabet=['a','b','c','d','e','f','g','h','i'];
// console.log(reverseAlphabet(alphabet));


function countSelectedElements(array) {
    var numberSelected = 0;
    array.forEach(function (element) {
        if (element.selected) {
            numberSelected++;
        }
    })
    return numberSelected;
};

let objects = [{
    task: 'do that',
    selected: true
}, {
    task: 'do this',
    selected: false
}];

console.log(countSelectedElements(objects));

/**
 * reware the following function so that it uses a foreach loop 
 * instead of a for loop
 * function concat(...items){
 *  let stringy = '';
 * for (let i = 0; i < items.length; i++){
 *      stringy += items[i];
 *  }
 *  return stringy;
 * }
 * 
 * let str =  concat('mario, ' ', 'alberto');
 * str == 'mario alberto';
 */

let str = concat('Kaleb', ' ', ' Wesley', ' ', 'Ercanbrack');

function concat(...items) {
    let stringy = '';
    items.forEach(function (element) {
        stringy += element;
    });
    items.forEach(element => string += element); //this line does the same thing  as like 80-82
    return stringy;
}



console.log(str);




//todo project code
let lists =[];

function createList(){
    let newList = {
        name: document.getElementById('ListName').value, //get list name
        tasks: []//list will have an array of tasks
    }
    lists.push(newList);
}

function createTask(list){
    let newTask = {
        name: document.getElementById('TaskName').value, //get task name
        description: document.getElementById('Description').value
    }
    list.tasks.push(newTask);
}



/**
 * Given the following object use either a 'for of' or 'for in'
 * loop to determine how many addresses are in the 84043
 * zip code
 */

let rentalProperties = {
    summerLake: {
      rooms: 4,
      street: '123 main st',
      zip: 84043
    },
    backWater: {
      rooms: 3,
      street: '123 rambler st',
      zip: 84545
    },
    sunriseMeadows: {
      rooms: 2,
      street: '123 black st',
      zip: 84043
    },
    independence: {
      rooms: 5,
      street: '123 digital dr',
      zip: 84545
    },
    cobalt: {
      rooms: 7,
      street: '123 loop st',
      zip: 84043
    }
  };

  let propertyCount = 0;
  for (const rentalPropName in rentalProperties) {
      if(rentalProperties[rentalPropName].zip == 84043){
          propertyCount++;
      }
  }

  console.log(propertyCount);