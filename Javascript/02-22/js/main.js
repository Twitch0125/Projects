class Rectangle{
    constructor(length, width) {
     this.width = width;
     this.length = length;   
    }
    getArea() {
        return this.width * this.length;
    }
} 

class Square extends Rectangle{
    constructor(width){
        super(width,width);
    }
}

class Task {
    constructor(description, name){
        this.description = description;
        this.name = name;
    }
    add(list){
        list.push(this)
    }
}
let list = [];
let myTask = new Task('balh blah', 'tasky')
myTask.add(list);


let newRectangle = new Rectangle(12, 10);

let area = newRectangle.getArea();

let newSquare = new Square(10,11);

