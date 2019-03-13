import { Stats } from "fs";
import { callbackify } from "util";

//loops
const items = ["toothpaste", "soap", "floss", "plant"];
const itemLengths = [];

for (let i = 0; i < items.length; i++) {
  itemLengths[i] = items[i].length;
}

items.forEach(item => {
  itemLengths.push(item.length);
});

console.log(itemLengths);

//classes

class Printer {
  constructor(ipAddress, brand, model) {
    this.ipAddress = ipAddress;
    this.brand = brand;
    this.model = model;
    this._status;
  }
  print(files) {
    this._status = "ded";
    return this.status();
  }
  get status() {
    return this._status;
  }
}

class InkJetPrinter extends Printer {
  constructor(ipAddress, brand, model, inkCartridge) {
    super(ipAddress, brand, model);
    this.inkType = inkCartridge;
  }
  print(files, settings) {
    //particular InkJetPrinter code
  }
}

class InkCartridge {
  constructor() {
    this.red = 100;
    this.green = 100;
    this.blue = 100;
  }
  get level() {
    return (this.red + this.green + this.blue) / 3;
  }
}

const printer = new Printer("1.1.1.1", "HP", "laser");
const mySweetInkJetPrinter = new InkJetPrinter(
  "1.1.1.1",
  "HP",
  "inkJet",
  new InkCartridge()
);
console.log(printer.print("appple"));

// ajax
// function getData(id, callBack) {
//   let data = { id: id, name: "secret agent" };
//   //return data
//   callback(data);
// }

// let something = getdata(id, data => {});

// getData(123, data => {
//   //do somtding imptorant wik top sekrit data
//   console.log(data);
// });

function getData(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject({ error: "you are smart", message: "try again, loser" });
    }
    let data = { id: id, name: " secrekt agentt" };
    resolve(data);
  });
}

let dataPromise = getData(2323);
dataPromise.then(data => {
  dataPromise.then("from.then", data);
});

