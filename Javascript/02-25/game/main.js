function Hero() {
    this.x = 200;
    this.y = 400;
    this.width = 50;
    this.height = 100;
    this.name = 'funk';
    this.health = 100;

    this.changeHeight = function(height){
        this.height = height;
    }
    this.changeName = function(name){
        this.name = name;
    }
}

// let timothy = new Hero(100);
// let tomothy = new Hero(200);
let crunk = new Hero();

crunk.changeHeight(200);
crunk.changeName('crunk');
$(function (){
    $('.blah').css('backgroundcolor: rgb(0,0,0), width: 500px');
});


