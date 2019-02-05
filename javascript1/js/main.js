// h1.innerHTML = 'hi again!';
document.body.appendChild(document.createTextNode('Hello MTech!'));
let h1 = document.getElementById('header'); // holds a reference to the <h1> tag/ accessing the same <h1> element

let car = {
    brand: 'Mini',
    model: 'cooper',
    cylinders: 8
};
h1.innerHTML = 'Brand: ' + car.brand + ' Model: ' + car.model + ' Cylnders: ' + car.cylinders


var megaUltraVar = {
    bool: true,
    number: 42,
    string: "Hello there",
    object: {
        value1: 1,
        value2: 'two'
    },
    func: function printMyString() {
        console.log(megaUltraVar.string);
    }
};

console.log(megaUltraVar.func);

var twoNumsAdded = 4 + 6;
var twoStrAdded = " General " + " Kenobi ";



console.log(twoNumsAdded, twoStrAdded);